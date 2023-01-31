-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: plants
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `creationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'An invitation to the Botanic Garden of Munich ! ','<p>Attention all garden lovers! </p><p><br></p><p><strong>The Botanic Garden of Munich</strong> invites you to a special event on <strong>January 13th, 2023</strong>. Come and explore the diverse plant life and stunning gardens that the Botanic Garden has to offer.</p><p><br></p><p>The Botanic Garden of Munich is home to <u>over 13,000</u> different plant species from all over the world. Visitors can explore the various greenhouses, including the tropical greenhouse with its lush vegetation and exotic flowers, and the desert greenhouse, featuring cacti and succulents.</p><p><br></p><p>In addition to the greenhouses, the Botanic Garden also features several outdoor gardens, including the Mediterranean garden, the rock garden, and the alpine garden. Each garden is designed to showcase the unique plant life and landscapes of different regions.</p><p><br></p><p>On January 13th, the Botanic Garden will be hosting a special event for garden lovers. Visitors will have the opportunity to take guided tours of the gardens, learn about different plant species, and participate in workshops and lectures on gardening and horticulture.</p><p><br></p><p>Don\'t miss out on this exciting opportunity to discover the beauty and diversity of the plant kingdom at the Botanic Garden of Munich. <strong>Mark your calendars for January 13th, 2023 and come and explore the gardens with fellow garden enthusiasts !</strong></p>','2023-01-28 14:49:47',1),(2,'How to keep your plants hydrated ? ','<p>Keeping your plants hydrated is essential for their health and growth. Without proper hydration, plants can become stressed and susceptible to disease. Here are five ways to ensure that your plants are getting the hydration they need:</p><p><br></p><ol><li><strong>Watering</strong>: The most obvious way to hydrate your plants is by watering them. The frequency of watering will depend on the type of plant, the size of the container, and the environmental conditions. It\'s important to avoid overwatering, which can lead to root rot and other problems.</li><li><strong>Mulching</strong>: Mulching is a great way to retain moisture in the soil. By applying a layer of mulch around your plants, you can slow down water evaporation and help the soil retain moisture.</li><li><strong>Using a moisture meter</strong>: A moisture meter is a simple tool that can help you determine when your plants need to be watered. This device can measure the moisture content of the soil and give you an accurate reading of how hydrated your plants are.</li><li><strong>Using a drip irrigation system</strong>: A drip irrigation system delivers water directly to the roots of your plants. This method of watering is particularly useful for plants in containers or for those planted in dry or hot climates.</li><li><strong>Misting</strong>: Misting your plants with water is a great way to provide them with a quick boost of hydration, especially for plants that are sensitive to dry air such as tropical plants.</li></ol><p><br></p><p>By implementing these five methods, you can ensure that your plants are getting the hydration they need to thrive. Remember that proper hydration is key to a healthy and beautiful garden.</p><p><br></p><p><br></p><p><br></p>','2023-01-28 14:49:47',1),(3,'A new discovery by scientists ...','<p><strong>Scientists have recently discovered a new species of plant in the remote rainforests of South America !</strong></p><p><br></p><p>The plant, which has yet to be officially named, is a type of flowering shrub that belongs to the daisy family.</p><p>The plant has a distinctive bright red color, and its petals are arranged in a circular pattern around a central yellow disk. It has been observed to grow to a height of about two meters, and it is believed to be a perennial species, meaning that it can live for more than two years.</p><p><br></p><p>The discovery of this new plant species is significant because it adds to the diversity of the rainforest ecosystem and can provide new insights into the evolution of flowering plants. It also highlights the importance of preserving these fragile ecosystems, as many species are still undiscovered and could be lost before they are ever known to science.</p><p>The discovery of this new plant also could have potential medicinal or agricultural applications. Scientists will study the chemical compounds of this plant to see if it could be used to treat various diseases.</p><p><br></p><p>It is a reminder that there is still much to be discovered and understood about the natural world, and that conservation efforts are crucial in order to protect these unique and valuable species. The research team plans to continue studying the newly discovered plant, and they hope to learn more about its biology and role in the ecosystem in the coming months and years.</p','2023-01-28 21:17:04',1),(5,'Ricinus, The most poisonous plant of the world','<p>The most poisonous plant in the world is widely considered to be the castor oil plant, also known as <strong><em>Ricinus communis</em></strong>. This plant, which is native to tropical regions of Africa and is now widely cultivated around the world, contains a highly toxic compound called ricin.</p><p><br></p><p><strong>Ricin</strong> is a protein that can cause severe symptoms if ingested, inhaled, or injected. Symptoms of ricin poisoning can include vomiting, diarrhea, seizures, and even death. Just a small amount of ricin, the size of a pinhead, can kill an adult.</p><p><br></p><p>The castor oil plant is a common ornamental plant, and it is also grown for its oil, which is used in various industrial and medicinal applications. However, the plant\'s seeds, which contain the highest concentration of ricin, should be handled with great care and never consumed.</p><p><br></p><p>Ingestion of castor oil seeds can cause severe symptoms, such as abdominal pain, vomiting, and diarrhea. In some cases, it can lead to dehydration, low blood pressure, and even death. Inhalation of ricin can cause difficulty breathing, chest tightness, and coughing, and if injected, it can cause severe pain, swelling, and even death.</p><p>While the castor oil plant is highly toxic, it can also have some medicinal uses. Ricin is being researched for use in cancer treatment and as a potential treatment for certain autoimmune diseases. However, the potential benefits of ricin must be weighed against the risks of exposure, and it should only be handled by trained professionals in controlled laboratory settings.</p><p><br></p><p><strong><u>Be careful ! </u></strong></p>','2023-01-28 21:18:33',1),(15,'The medicinal plants : a new way to care ?','<p>Medicinal plants have been used for centuries to treat a wide range of ailments and illnesses. These plants contain compounds that have medicinal properties, making them a natural and effective alternative to traditional medicine. Here are some examples of medicinal plants and their uses:</p><ol><li><strong>Echinacea</strong>: Echinacea, also known as coneflower, is a popular medicinal plant that is known for its immune-boosting properties. It is often used to treat colds, flu, and other respiratory infections.</li><li><strong>Aloe vera</strong>: Aloe vera is a succulent plant that is known for its soothing and healing properties. The gel inside the leaves can be used to treat burns, cuts, and other skin conditions.</li><li><strong>Turmeric</strong>: Turmeric is a spice that is commonly used in cooking but also has many medicinal properties. It is known to have anti-inflammatory and antioxidant properties and is used to treat a variety of conditions, including osteoarthritis, heart disease, and certain cancers.</li><li><strong>Ginger</strong>: Ginger is another spice that has been used for medicinal purposes for centuries. It is known for its anti-inflammatory and pain-relieving properties, and is commonly used to treat nausea, vomiting, and motion sickness.</li><li><strong>Ginkgo Biloba</strong>: Ginkgo Biloba is a tree native to China and has been used for centuries for its medicinal properties. The leaves of the tree contain compounds that can improve blood flow, helping to improve memory and cognitive function.</li></ol><p>These are just a few examples of the many medicinal plants that are available. It\'s important to remember that before using any plant for medicinal purposes, it\'s best to consult with a medical professional or a qualified herbalist to ensure that it is safe and appropriate for your individual needs.</p>','2023-01-28 21:39:11',1),(16,'Plants : 5 interesting facts','<p>Plants are essential to life on Earth, providing oxygen, food, and medicine to many living organisms. They also play a crucial role in maintaining the balance of the planet\'s ecosystems. Here are some interesting facts about plants:</p><ol><li><strong>Photosynthesis</strong>: One of the most important functions of plants is photosynthesis, the process by which they convert light energy into chemical energy. Through photosynthesis, plants produce oxygen and glucose, which they use for energy and growth.</li><li><strong>Diversity</strong>: There are over 300,000 known species of plants, each with unique characteristics and adaptations to their environment. They can be found in almost every corner of the planet, from the rainforests to the deserts.</li><li><strong>Air purification</strong>: Plants can also act as natural air purifiers, removing pollutants and harmful chemicals from the air. Studies have shown that having plants in your home or office can improve air quality and reduce stress.</li><li><strong>Medicinal properties</strong>: Many plants have medicinal properties and have been used for centuries to treat a wide range of ailments. From the aloe vera used to treat burns and cuts to the echinacea used to boost the immune system.</li><li><strong>Food source</strong>: Plants are also a primary food source for many species, including humans. They provide essential nutrients and vitamins that are necessary for good health and survival.</li></ol><p>In conclusion, plants play a vital role in our lives and the health of the planet. They not only provide food, medicine, and oxygen but also act as natural air purifiers and improve the aesthetics of our surroundings. It\'s important to appreciate the beauty and importance of plants and make an effort to protect and conserve them.</p>','2023-01-28 21:41:02',1),(17,'The Botanical Wonders Exhibition','<p><strong><u>The Botanical Wonders Exhibition</u></strong> is a one-of-a-kind event that will take visitors on a journey to discover the beauty and diversity of plants from around the world. From the lush rainforests of South America to the arid deserts of Africa, this exhibition will showcase an array of rare and exotic plants that are sure to amaze and inspire.</p><p><br></p><p>The exhibition will feature a diverse collection of plants, including the Venus flytrap, known for its unique ability to capture insects, and the Rafflesia arnoldii, a giant flower that can grow up to three feet in diameter. Visitors will also have the opportunity to see the unique and beautiful succulent, the Jade plant, and the carnivorous Pitcher Plant.</p><p>In addition to the display of plants, the exhibition will also include interactive exhibits, guided tours, and educational workshops, providing visitors with an in-depth understanding of the importance of plants in our environment and how to care for them.</p><p>The exhibition will take place at the Botanic Garden of Munich on the 13th of January 2023. Don\'t miss this opportunity to discover the beauty and wonder of the plant kingdom.</p><p>Ticket prices for the exhibition are as follows:</p><ul><li><strong>Adult</strong>: €12</li><li><strong>Children</strong>: €8</li><li><strong>Family</strong>: €30</li></ul><p>For more information and to purchase tickets, please visit the exhibition website.\"</p><p><em>Please note that the Botanical Wonders Exhibition is a fictional event and the information provided is not real.</em></p><p><br></p><p><br></p><p><br></p><p><br></p>','2023-01-28 21:43:08',1),(18,'A superb event to present you','<p>Here is a super event ! </p>','2023-01-29 22:52:36',1);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `favorite` tinyint DEFAULT '0',
  `user_id` int DEFAULT NULL,
  `plant_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `plant_id_idx` (`plant_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `plant_id` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO `favorite` VALUES (1,1,1,12);
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  `article_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  KEY `article_id_idx` (`article_id`),
  CONSTRAINT `article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (5,'<p>I\'m so excited for this event! As a passionate gardener, I\'m always looking for new opportunities to expand my knowledge and experience. It sounds like a perfect place to do just that.&nbsp;</p>','2023-01-31 06:29:07',1,1),(6,'<p>What a great event! I can\'t wait to explore the Botanic Garden of Munich on January 13th and learn all about the diverse plant species. Can\'t wait to see the tropical and desert greenhouses and all the different outdoor gardens. See you there!</p>','2023-01-31 06:29:18',1,1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `picture` varchar(255) NOT NULL,
  `creationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_plant_userid_idx` (`user_id`),
  CONSTRAINT `fk_plant_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant`
--

LOCK TABLES `plant` WRITE;
/*!40000 ALTER TABLE `plant` DISABLE KEYS */;
INSERT INTO `plant` VALUES (11,'Green love ','d084bfea-7276-4266-aaea-99df28cd6c32-calathea.jpeg','2023-01-29 09:16:31',1),(12,'Green wedding ','128520ac-0021-4875-8107-5bfc0e8a455d-philodendronpinkprincess.jpeg','2023-01-29 09:17:49',2),(13,'Celebrating plant life ','eb911fca-206e-450d-8bf6-4324ac38084f-forest.jpg','2023-01-29 09:18:34',3),(14,'Celebrating growth and new beginnings.','75b77977-6282-4601-8256-1776f6d103f5-woodii.jpeg','2023-01-29 09:22:20',2),(15,'Where flowers and friendships bloom.','bbefcd88-6b10-4769-9a04-620976ad4003-flowers.jpg','2023-01-29 09:22:47',3),(16,'The garden is my medicine ','0f9dd0e9-dce9-40ff-a403-1550c2a73d05-zamioculas.jpeg','2023-01-29 09:23:22',5),(17,'Plants are beautiful ','1b9128e7-74d2-4ba5-aa03-c44d7fa4d06f-monsteraadansonii.jpeg','2023-01-29 09:23:56',2),(18,'Back to nature ','28c017af-725a-43ee-b74a-3bdcb63fed67-pothos.jpeg','2023-01-29 09:24:59',4),(19,'My Monstera Variegata is here !! ','24f0cb1f-f874-49c5-afd2-fe9a30f392f5-monsteravariegata.jpeg','2023-01-29 22:51:38',2);
/*!40000 ALTER TABLE `plant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `admin` tinyint DEFAULT '0',
  `registrationDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `profilePicture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Marion','Mizu','marionmizulalonde@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',1,'2023-01-29 07:05:30',NULL),(2,'Clotilde','June','juneclo@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',0,'2023-01-31 07:05:30',NULL),(3,'Rosalia','Rose','rosaliaflowers@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',0,'2023-01-31 07:05:30',NULL),(4,'Axel','Zanshizu','axelzanshizu@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',0,'2023-01-31 07:05:30',NULL),(5,'Camille','Camelia','camille_lia@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',0,'2023-01-31 07:05:30',NULL);


/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29 23:45:18
