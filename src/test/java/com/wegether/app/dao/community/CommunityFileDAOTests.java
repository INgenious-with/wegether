package com.wegether.app.dao.community;

import com.wegether.app.dao.CommunityFileDAO;
import com.wegether.app.domain.dto.CommunityFileDTO;
import com.wegether.app.domain.vo.FileVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest
@Slf4j
public class CommunityFileDAOTests {

    @Autowired
    private CommunityFileDAO communityFileDAO;

    @Test
    public void saveTest() {
        CommunityFileDTO communityFileDTO = new CommunityFileDTO();
        communityFileDTO.setFileName("새빨간로즈.png");
        communityFileDTO.setFilePath("2023/05/19");
        communityFileDTO.setFileSize(1238L);
        communityFileDTO.setFileUuid(UUID.randomUUID().toString());
        log.info(communityFileDTO.toString());
        communityFileDAO.save(communityFileDTO);
    }

    @Test
    public void selectAllTest() {
        communityFileDAO.findAll(31L).stream().map(CommunityFileDTO::toString).forEach(log::info);
    }
}
