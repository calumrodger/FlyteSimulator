package com.codeclan.example.FlyteSim;

import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.repositories.PlayerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FlyteSimApplicationTests {

	@Autowired
	PlayerRepository playerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canGetPlayerName(){
		Player player = new Player("Ryan", "CatBoy", 50);
//		playerRepository.save(player);
		assertEquals("Ryan", player.getName());
	}

	@Test
	public void canFindPlayerByName(){
		assertEquals(1, playerRepository.findByName("Ryan").size());
	}


}
