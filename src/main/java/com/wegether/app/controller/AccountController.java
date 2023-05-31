package com.wegether.app.controller;

import com.wegether.app.domain.vo.MemberVO;
import com.wegether.app.service.account.AccountService;
import com.wegether.app.service.mail.ChangePwSendMailService;
import com.wegether.app.service.mail.RegisterMailService;
import jdk.jshell.spi.ExecutionControl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.Optional;


@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/accounts/*")
public class AccountController {

    //계정
    private final AccountService accountService;

    // 인증코드 메일
    private final RegisterMailService registerMailService;

    // 비밀번호 재설정 메일
    private final ChangePwSendMailService changePwSendMailService;


    //    회원가입 화면으로 이동
    @GetMapping("register")
    public void goToJoinForm(MemberVO memberVO){;}

    // 회원가입 완료
    @PostMapping("register")
    public RedirectView join(MemberVO memberVO, RedirectAttributes redirectAttributes){
        accountService.join(memberVO);
        redirectAttributes.addFlashAttribute("join", "true");
        return new RedirectView("/accounts/login");
    }

    // 카카오 회원가입
    @GetMapping("kakao-register")
    public void goToKakakJoinForm(String memberId, String memberPassword, MemberVO memberVO, HttpSession session
    ){;}

    @PostMapping("kakao-register")
    @Transactional(rollbackFor = Exception.class)
    public RedirectView joinToKakao(MemberVO memberVO, RedirectAttributes redirectAttributes, HttpSession session){
        accountService.join(memberVO);
        accountService.changeLoginStatusToKakao(memberVO.getMemberId(), memberVO.getSnsProfile());
        redirectAttributes.addFlashAttribute("join", "true");
        session.setAttribute("id", accountService.checkId(memberVO.getMemberId()).get().getId());
        return new RedirectView("/index/main");
    }


    //    로그인
    @GetMapping("login")
    public void goToLoginForm(MemberVO memberVO, RedirectAttributes redirectAttributes, @RequestParam(required = false) String withdraw, @RequestParam(required = false) String location,
                               HttpSession session,Model model){
        if(location != null){
            session.setAttribute("location", location);
        }


       model.addAttribute("naverWithdraw", withdraw) ;}

    @PostMapping("login")
    public RedirectView login(String memberId, String memberPassword, HttpSession session, RedirectAttributes redirectAttributes){
        Optional<Long> foundMember = accountService.login(memberId, memberPassword);


        //카카오나 네이버 계정으로 일반로그인했을 때
        if(foundMember.isPresent()) {
            if (accountService.checkId(memberId).get().getMemberLoginStatus().equals("KAKAO") ||
                    accountService.checkId(memberId).get().getMemberLoginStatus().equals("NAVER")) {
                redirectAttributes.addFlashAttribute("loginStatus", "false");
                return new RedirectView("/accounts/login");
            }
        }

        //관리자 계정
        if(foundMember.isPresent()) {
            if (accountService.checkId(memberId).get().getMemberGrade().equals("ADMIN")) {
                session.setAttribute("id", foundMember.get());
                return new RedirectView("/admins/notice/list");
            }
        }

        //회원탈퇴 계정 검사
        if(foundMember.isPresent()){
            if(!accountService.checkId(memberId).get().isMemberStatus()){
                redirectAttributes.addFlashAttribute("withdraw", "true");
                return new RedirectView("/accounts/login");
            }
        }


        // 일반 계정 로그인 성공
        if(foundMember.isPresent()){
            session.setAttribute("id", foundMember.get());
            //등록하기 폼으로 바로 이동
            if(session.getAttribute("location") != null){
                return new RedirectView(session.getAttribute("location").toString());
            }

            return new RedirectView("/index/main");
        }



        // 아예 로그인 실패
        redirectAttributes.addFlashAttribute("login", "false");
        return new RedirectView("/accounts/login");

    }

    //    로그아웃
    @GetMapping("logout")
    public RedirectView logout(HttpSession session){
        session.invalidate();
        return new RedirectView("/accounts/login");
    }


    //    아이디중복검사 // 아이디찾기
    @PostMapping("check-id")
    @ResponseBody
    public Optional<MemberVO> checkId(String memberId){
        log.info(memberId);
        Optional<MemberVO> foundMemberVO = accountService.checkId(memberId);
        return foundMemberVO;
    }

    // 회원 가입 메일인증
    @PostMapping("mail-confirm")
    @ResponseBody
    public String mailConfirm(String memberId) throws Exception{
        String code = registerMailService.sendSimpleMessage(memberId);
        log.info("인증 코드 :" + code);
        return code;

    }
    // 비밀번호 재설정 메일전송
    @PostMapping("change-pw")
    @ResponseBody
    public void sendChangePwMail(String memberId, Long id) throws Exception{
        changePwSendMailService.sendSimpleMessage(memberId, id);
    }


    //아이디찾기
    @GetMapping("find/id")
    public void goToFindIdForm(){;}


    //비밀번호찾기
    @GetMapping("find/pwd")
    public void goToFindPwForm(){;}

    //비밀번호 재설정
    @GetMapping("find/change-pwd")
    public void goToChangePwForm(Long id, MemberVO memberVO, Model model){
        log.info(id.toString());
        model.addAttribute("id", id);

    }

    @PostMapping("find/change-pwd")
    public RedirectView changePassword(Long id, MemberVO memberVO){
        log.info(memberVO.getMemberPassword());
        log.info(id.toString());
        accountService.changePassword(Long.valueOf(id), memberVO.getMemberPassword());
        return new RedirectView("/accounts/login");
    }


    //네이버 로그인


    @GetMapping("naver-login")
    public void naverLogin(){;}

    @PostMapping("naver-register")
    public void naverRegister(String memberId, String memberName, String memberPassword, String snsProfile, Model model){
        model.addAttribute("memberId", memberId);
        model.addAttribute("memberName", memberName);
        model.addAttribute("memberPassword", memberPassword);
        model.addAttribute("snsProfile", snsProfile);
        ;}


    @PostMapping("naver-join")
    @Transactional(rollbackFor = Exception.class)
    public RedirectView naverJoin(MemberVO memberVO, HttpSession session,RedirectAttributes redirectAttributes){
        accountService.join(memberVO);
        accountService.changeLoginStatusToNaver(memberVO.getMemberId(), memberVO.getSnsProfile());
        Optional<MemberVO> JoinMemberVO = accountService.checkId(memberVO.getMemberId());
        session.setAttribute("id", JoinMemberVO.get().getId());
        redirectAttributes.addFlashAttribute("join", "true");
        return new RedirectView("/index/main");
    }

    // 세션에 담기위함..
    @PostMapping("naver-login")
    @ResponseBody
    public void naverlogin(@RequestBody MemberVO memberVO, HttpSession session){
        if(memberVO.getMemberLoginStatus().equals("NAVER") &&
                accountService.getMemberById(memberVO.getId()).get() != null){
            accountService.changeLoginStatusToNaver(memberVO.getMemberId(), memberVO.getSnsProfile());
            session.setAttribute("id", memberVO.getId());
        }

        //로그인후 마이페이지에서 연동하는 것이면
        if(memberVO.getMemberLoginStatus().equals("WEGETHER") && session.getAttribute("id") != null){
            log.info("들어옴");
            MemberVO member = accountService.getMemberById((Long)session.getAttribute("id")).get();
            if(member.getMemberLoginStatus().equals("WEGETHER")){
//            회원의 계정을 네이버 계정으로 변경(연동)
                accountService.changeLoginStatusToNaver(member.getMemberId(), memberVO.getSnsProfile());
            }
        }
    }




}




















