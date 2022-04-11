package com.codeclan.example.FlyteSim;

import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.models.PreviousRap;
import com.codeclan.example.FlyteSim.repositories.PlayerRepository;
import com.codeclan.example.FlyteSim.repositories.PreviousRapRepository;
import com.codeclan.example.FlyteSim.repositories.StarterWordRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FlyteSimApplicationTests {

	@Autowired
	PlayerRepository playerRepository;

	@Autowired
	StarterWordRepository starterWordRepository;

	@Autowired
	PreviousRapRepository previousRapRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canGetPlayerName(){
		Player player = new Player("Ryan", "CatBoy", 50);
		playerRepository.save(player);
		assertEquals("Ryan", player.getName());
	}

	@Test
	public void canGetPreviousRaps(){
		Player player = new Player("Ryan", "CatBoy", 50);
		PreviousRap previousRap = new PreviousRap("first line", 1000, player);
		player.addRap(previousRap);
		assertEquals(1, player.getPreviousRaps().size());
	}

	@Test
	public void canFindRapByPlayerName(){
		Player player = new Player("Ryan", "CatBoy", 50);
		PreviousRap previousRap = new PreviousRap("first line", 1000, player);
		player.addRap(previousRap);
		assertEquals(1, previousRapRepository.findByPlayerName("Ryan").size());
	}


	@Test
	public void canGetAllStarterWords(){
		assertEquals(7, starterWordRepository.findAll().size());
	}



}
