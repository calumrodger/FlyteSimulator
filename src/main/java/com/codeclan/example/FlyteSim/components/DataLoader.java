package com.codeclan.example.FlyteSim.components;
import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.models.PreviousRap;
import com.codeclan.example.FlyteSim.models.StarterWord;
import com.codeclan.example.FlyteSim.repositories.PreviousRapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.codeclan.example.FlyteSim.repositories.PlayerRepository;
import com.codeclan.example.FlyteSim.repositories.StarterWordRepository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    StarterWordRepository starterWordRepository;

    @Autowired
    PreviousRapRepository previousRapRepository;


    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) {

        Player ryan = new Player("Ryan", "CatBoy", 0);
        playerRepository.save(ryan);

        Player calum = new Player("Calum", "Wee Cal Robot", 0);
        playerRepository.save(calum);

        StarterWord word1 = new StarterWord("code", 4);
        starterWordRepository.save(word1);

        StarterWord word2 = new StarterWord("clan", 2);
        starterWordRepository.save(word2);

        StarterWord word3 = new StarterWord("nation", 3);
        starterWordRepository.save(word3);

        StarterWord word4 = new StarterWord("run", 4);
        starterWordRepository.save(word4);

        StarterWord word5 = new StarterWord("rhyme", 5);
        starterWordRepository.save(word5);

        StarterWord word6 = new StarterWord("dumb", 1);
        starterWordRepository.save(word6);

        StarterWord word7 = new StarterWord("snake", 3);
        starterWordRepository.save(word7);

        StarterWord word8 = new StarterWord("vapor", 3);
        starterWordRepository.save(word8);

        StarterWord word9 = new StarterWord("ball", 3);
        starterWordRepository.save(word9);

        StarterWord word10 = new StarterWord("dope", 3);
        starterWordRepository.save(word10);

        StarterWord word11 = new StarterWord("booze", 3);
        starterWordRepository.save(word11);

        StarterWord word12 = new StarterWord("victory", 5);
        starterWordRepository.save(word12);

        StarterWord word13 = new StarterWord("trip", 3);
        starterWordRepository.save(word13);

        StarterWord word14 = new StarterWord("heavy", 5);
        starterWordRepository.save(word14);

        StarterWord word15 = new StarterWord("smoker", 4);
        starterWordRepository.save(word15);

        StarterWord word16 = new StarterWord("grab", 2);
        starterWordRepository.save(word16);

        StarterWord word17 = new StarterWord("joke", 2);
        starterWordRepository.save(word17);

        StarterWord word18 = new StarterWord("crazy", 4);
        starterWordRepository.save(word18);

        StarterWord word19 = new StarterWord("city", 3);
        starterWordRepository.save(word19);

        StarterWord word20 = new StarterWord("bash", 1);
        starterWordRepository.save(word20);






    }
}
