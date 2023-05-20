package com.wegether.app.service.community;

import com.wegether.app.dao.CommunityDAO;
import com.wegether.app.dao.CommunityFileDAO;
import com.wegether.app.domain.dto.CommunityDTO;
import com.wegether.app.domain.dto.CommunityPagination;
import com.wegether.app.domain.dto.Pagination;
import com.wegether.app.domain.vo.CommunityVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements CommunityService {

    private final CommunityDAO communityDAO;
    private final CommunityFileDAO communityFileDAO;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<CommunityDTO> getList(CommunityPagination communityPagination) {
//        게시글 전체 목록
        final List<CommunityDTO> communityDTOS = communityDAO.findAll(communityPagination);
//        게시글 하나씩 첨부파일 목록 담기
        communityDTOS.forEach(communityDTO -> communityDTO.setFiles(communityFileDAO.findAll(communityDTO.getId())));
        return communityDTOS;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Optional<CommunityDTO> getCommunity(Long id) {
        final Optional<CommunityDTO> foundPost = communityDAO.findById(id);
        if(foundPost.isPresent()){
            foundPost.get().setFiles(communityFileDAO.findAll(foundPost.get().getId()));
        }
        return foundPost;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void write(CommunityDTO communityDTO) {
        communityDAO.save(communityDTO);
        communityDTO.getFiles().forEach(fileDTO -> {
            fileDTO.setCommunityId(communityDTO.getId());
            communityFileDAO.save(fileDTO);
        });
    }

    @Override
    public void modify(CommunityDTO communityDTO) { communityDAO.setCommunityDTO(communityDTO); }

    @Override
    public void remove(Long id) { communityDAO.delete(id); }
}
