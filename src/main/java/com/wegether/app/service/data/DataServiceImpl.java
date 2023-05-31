package com.wegether.app.service.data;

import com.wegether.app.dao.DataDAO;
import com.wegether.app.dao.DataFileDAO;
import com.wegether.app.dao.FileDAO;
import com.wegether.app.dao.PayDAO;
import com.wegether.app.domain.dto.*;
import com.wegether.app.domain.type.CategoryType;
import com.wegether.app.domain.type.FileType;
import com.wegether.app.domain.vo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DataServiceImpl implements DataService {
    private final DataDAO dataDAO;
    private final FileDAO fileDAO;
    private final DataFileDAO dataFileDAO;
    private final PayDAO payDAO;


//    자료 목록 - 파일
    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<DataDTO> getList(DataPagination dataPagination, CategoryType categoryType) {
    //        게시글 전체 목록
        final List<DataDTO> datas = dataDAO.findAll(dataPagination, categoryType);
    //        게시글 하나씩 첨부파일 목록 담기
        datas.forEach(data -> data.setFiles(fileDAO.dataFindAll(data.getId())));
        return datas;
    }

//   자료 등록 - 파일까지
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void write(DataDTO dataDTO) {
        dataDAO.save(dataDTO);
        for(int i=0; i<dataDTO.getFiles().size(); i++){
            dataDTO.getFiles().get(i).setDataId(dataDTO.getId());
            dataDTO.getFiles().get(i).setFileType(i == 0 ? FileType.REPRESENTATIVE.name() : FileType.NON_REPRESENTATIVE.name());
            fileDAO.save(dataDTO.getFiles().get(i));
        }
        dataDTO.getFiles().forEach(dataFileDTO ->
        { DataFileVO dataFileVO = new DataFileVO();
            dataFileVO.setId(dataFileDTO.getId());
            dataFileVO.setDataId(dataFileDTO.getDataId());
            dataFileDAO.save(dataFileVO);
        });

    }

//    자료 조회 - 파일
    @Override
    @Transactional(rollbackFor = Exception.class)
    public Optional<DataDTO> read(Long id) {
        final Optional<DataDTO> foundData = dataDAO.findById(id);
        if(foundData.isPresent()){
            foundData.get().setFiles(fileDAO.dataFindAll(foundData.get().getId()));
        }
        return foundData;
    }

//    자료 조회수 증가
    @Override
    public void modifyViewCountUp(Long id) {
        dataDAO.viewCountUp(id);
    }

//    자료 개수
    @Override
    public int getTotal() {
        return dataDAO.findCountOfData();
    }

//    자료 결제 페이지
    @Override
    public Optional<DataDTO> readDataPay(Long id) {
        final Optional<DataDTO> foundMember = dataDAO.findByIdDataPay(id);
//        if(foundMember.isPresent()){
//            foundMember.get().setMemberId(2L);
//        }
        return foundMember;
    }

    @Override
    public void modify(DataDTO dataDTO) {
        dataDAO.setData(dataDTO);
    }

//      결제 완료 - insert pay
    @Override
    public void completePay(PayVO payVO) {
        payDAO.savePay(payVO);
    }

    @Override
    public void dataImageWrite (DataFileDTO dataFileDTO) {
        dataFileDAO.dataImageSave(dataFileDTO);
    }

    public void dataImageMiddleWrite(DataFileVO dataFileVO) {
        dataFileDAO.save(dataFileVO);
    }
    // 파일 삭제
    public void fileRemove(Long id){
        dataFileDAO.delete(id);
    };

//      결제 완료 member point 사용
    @Override
    public void modifyPoint(Long memberId, Long payPointUse) {
        payDAO.updatePoint(memberId, payPointUse);
    }

    //  결제 완료  member point 적립
    public void modifyMemberPointPlus(Long memberId, Long getHistory) {payDAO.updateMemberPointPlus(memberId, getHistory);}

    //  결제 완료 insert point
//    적립
    @Override
    public void getPoint(PointVO pointVO) {
        payDAO.savePoint(pointVO);
    }

//    사용
    @Override
    public void usePoint(PointVO pointVO) {
        payDAO.minusPayPoint(pointVO);
    }


    //    찜하기
    @Override
    public void doWish(Long memberId, Long dataId) {
        dataDAO.saveWish(memberId, dataId);
    }

//    찜하기 취소
    @Override
    public void doNotWish(Long memberId, Long dataId) {
        dataDAO.deleteWish(memberId, dataId);
    }

//    찜하기 검사
    @Override
    public Long getWishId(Long memberId, Long dataId) {
        return dataDAO.findWishId(memberId, dataId);
    }
}
