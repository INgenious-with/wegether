package com.wegether.app.dao;

import com.wegether.app.domain.vo.PayVO;
import com.wegether.app.domain.vo.PointVO;
import com.wegether.app.mapper.DataMapper;
import com.wegether.app.mapper.PayMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PayDAO {
    private final PayMapper payMapper;

    //  결제 완료 insert pay
    public void savePay(PayVO payVO) {payMapper.insertPay(payVO);}

    //  결제 완료 member Point 사용
    public void updatePoint(Long memberId, Long payPointUse) {payMapper.updateMemberPoint(memberId, payPointUse); }

    //  결제 완료  member point 적립
    public void updateMemberPointPlus(Long memberId, Long getHistory) {payMapper.updateMemberPointPlus(memberId, getHistory);};

    //  결제 완료 insert point (적립)
    public void savePoint(PointVO pointVO){payMapper.insertPoint(pointVO) ; }

    //  결제 완료 insert point (사용)
    public void minusPayPoint(PointVO pointVO){payMapper.insertPayPoint(pointVO) ; }

}
