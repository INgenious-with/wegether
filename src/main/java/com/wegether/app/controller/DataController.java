package com.wegether.app.controller;

import com.wegether.app.domain.dto.CommunityDTO;
import com.wegether.app.domain.dto.DataDTO;
import com.wegether.app.domain.dto.DataPagination;
import com.wegether.app.domain.type.CategoryType;
import com.wegether.app.domain.vo.*;
import com.wegether.app.domain.vo.PointVO;
import com.wegether.app.service.account.AccountService;
import com.wegether.app.service.data.DataService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;


@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/datas/*")
public class DataController {
    private final DataService dataService;
    private final AccountService accountService;
    private final HttpSession httpSession;

//    자료 목록 - 기본
//    @GetMapping("list")
//    public void goToDataList(DataPagination dataPagination, CategoryType categoryType, @RequestParam(defaultValue = "all") String type, @RequestParam(defaultValue = "new") String order, Model model){
//        dataPagination.setTotal(dataService.getTotal());
//        dataPagination.progress();
//        categoryType.setType(type);
//        categoryType.setOrder(order);
//        model.addAttribute("datas", dataService.getList(dataPagination, categoryType));
//    }

    @GetMapping("list")
    public void goToList(){;}

    //    자료 목록 - rest 시도 중 ..
    @ResponseBody
    @GetMapping("list/{page}/{type}/{order}")
    public List<DataDTO> goToDataList(@PathVariable int page, @PathVariable String type, @PathVariable String order){
        DataPagination dataPagination = new DataPagination();
        CategoryType categoryType = new CategoryType();
        dataPagination.setTotal(dataService.getTotal());
        dataPagination.progress(8);
        dataPagination.setPage(page);
        categoryType.setType(type);
        categoryType.setOrder(order);
       return dataService.getList(dataPagination, categoryType);
    }


    //    자료 상세
    @GetMapping("detail")
    public void read(@RequestParam Long id, Model model, DataDTO dataDTO, RedirectAttributes redirectAttributes){
        dataService.modifyViewCountUp(dataDTO.getId());
        model.addAttribute("dataDTO", dataService.read(id).get());
    }


    //    자료 등록 - HttpSession session
    @GetMapping("register")
    public void goToRegisterForm(HttpSession session, Model model, DataDTO dataDTO){
        Long memberId = accountService.getMemberById((Long) session.getAttribute("id")).get().getId();
//        Long memberId = (Long)httpSession.getAttribute("id");
        model.addAttribute("memberId", memberId);
    };

    //    자료 등록 > 리스트 이동
    @PostMapping("register")
    public RedirectView register(DataDTO dataDTO) {
        Long memberId = (Long)httpSession.getAttribute("id");
        dataDTO.setMemberId(memberId);
        dataService.write(dataDTO);
        return new RedirectView("/datas/list");
    }


//    자료 결제 페이지
    @GetMapping("payment")
    public void goToPayment(@RequestParam Long dataId, Model model, PayVO payVO, HttpSession session, DataDTO dataDTO){
        DataDTO readDataPay = dataService.readDataPay(dataId).get();
        Long memberId = (Long)httpSession.getAttribute("id");
        MemberVO member = accountService.getMemberById(memberId).get();

        model.addAttribute("dataDTO", readDataPay);
        model.addAttribute("memberId", member);
    }

//      결제 완료 - insert pay + update memberPoint + insert point
    @PostMapping("payment")
    @Transactional(rollbackFor = Exception.class)
    public RedirectView completePay(PayVO payVO, Long payPointUse, PointVO pointVO, Long getHistory) {
        Long memberId = (Long)httpSession.getAttribute("id");
        pointVO.setDataId(payVO.getDataId());
        dataService.completePay(payVO);
        dataService.modifyPoint(memberId, payPointUse);
        dataService.modifyMemberPointPlus(memberId, getHistory);
        dataService.getPoint(pointVO);

        if(payPointUse != 0){
            dataService.usePoint(pointVO);
        }
        return new RedirectView("/datas/list");

    }


//    찜하기
    @GetMapping("do-wish/{dataId}")
    @ResponseBody
    public void doWish(@PathVariable Long dataId){
        Long id = (Long) httpSession.getAttribute("id");
        dataService.doWish(id, dataId);
    }

//    찜하기 취소
    @GetMapping("do-not-wish/{dataId}")
    @ResponseBody
    public void doNotWish(@PathVariable Long dataId){
        Long id = (Long) httpSession.getAttribute("id");
        dataService.doNotWish(id, dataId);
    }

//    찜 검사
    @GetMapping("wish/{dataId}")
    @ResponseBody
    public boolean checkMyWish(@PathVariable Long dataId){
        Long id = (Long) httpSession.getAttribute("id");
        return dataService.getWishId(id, dataId) != null;
    }


}   //E




















