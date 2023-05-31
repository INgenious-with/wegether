package com.wegether.app.service.data;

import com.wegether.app.domain.dto.*;
import com.wegether.app.domain.type.CategoryType;
import com.wegether.app.domain.vo.*;

import java.util.List;
import java.util.Optional;


public interface DataService {
    //    게시글 목록
    public List<DataDTO> getList(DataPagination dataPagination, CategoryType categoryType);

    //    게시글 추가
    public void write(DataDTO dataDTO);

    //    게시글 조회
    public Optional<DataDTO> read(Long id);

    //    게시글 전체 개수 조회
    public int getTotal();

    //  게시글 조회수
    public void modifyViewCountUp(Long id);

    //  결제 페이지
    public Optional<DataDTO> readDataPay(Long id);

    // 자료 수정
    public void modify(DataDTO dataDTO);


    public void dataImageWrite (DataFileDTO dataFileDTO);

    public void dataImageMiddleWrite(DataFileVO dataFileVO);

    //  결제 완료 - insert pay
    public void completePay(PayVO payVO);

    //  결제 완료 - member point 사용
    public void modifyPoint(Long memberId, Long payPointUse);

    //  결제 완료  member point 적립
    public void modifyMemberPointPlus(Long memberId, Long getHistory) ;

    //  결제 완료 insert point
//    적립
    public void getPoint(PointVO pointVO);
//    사용
    public void usePoint(PointVO pointVO);


    //    찜하기
    public void doWish(Long memberId, Long dataId);

    //    찜하기 취소
    public void doNotWish(Long memberId, Long dataId);

    //    내가 찜한 자료 검사
    public Long getWishId(Long memberId, Long dataId);


    default DataDTO toDTO(DataVO dataVO){
        DataDTO dataDTO = new DataDTO();
        dataDTO.setId(dataDTO.getId());
        dataDTO.setDataTitle(dataVO.getDataTitle());
        dataDTO.setDataContent(dataVO.getDataContent());
        dataDTO.setDataPrice(dataVO.getDataPrice());
        dataDTO.setDataSchool(dataVO.getDataSchool());
        dataDTO.setDataMajor(dataVO.getDataMajor());
        dataDTO.setDataReadCount(dataVO.getDataReadCount());
        dataDTO.setDataRegisterDate(dataVO.getDataRegisterDate());
        dataDTO.setDataUpdateDate(dataVO.getDataUpdateDate());
        dataDTO.setMemberId(dataVO.getMemberId());

        return dataDTO;
    }

    default DataFileDTO toDTO(FileVO fileVO){
        DataFileDTO dataFileDTO = new DataFileDTO();
        dataFileDTO.setId(fileVO.getId());
        dataFileDTO.setFileName(fileVO.getFileName());
        dataFileDTO.setFileUuid(fileVO.getFileUuid());
        dataFileDTO.setFileSize(fileVO.getFileSize());
        dataFileDTO.setFilePath(fileVO.getFilePath());
        return dataFileDTO;
    }

    // 파일 삭제
    public void fileRemove(Long id);

}






















