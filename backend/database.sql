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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'An invitation to the Botanic Garden of Munich ! ','<p>Attention all garden lovers! </p><p><br></p><p><strong>The Botanic Garden of Munich</strong> invites you to a special event on <strong>January 13th, 2023</strong>. Come and explore the diverse plant life and stunning gardens that the Botanic Garden has to offer.</p><p><br></p><p>The Botanic Garden of Munich is home to <u>over 13,000</u> different plant species from all over the world. Visitors can explore the various greenhouses, including the tropical greenhouse with its lush vegetation and exotic flowers, and the desert greenhouse, featuring cacti and succulents.</p><p><br></p><p>In addition to the greenhouses, the Botanic Garden also features several outdoor gardens, including the Mediterranean garden, the rock garden, and the alpine garden. Each garden is designed to showcase the unique plant life and landscapes of different regions.</p><p><br></p><p>On January 13th, the Botanic Garden will be hosting a special event for garden lovers. Visitors will have the opportunity to take guided tours of the gardens, learn about different plant species, and participate in workshops and lectures on gardening and horticulture.</p><p><br></p><p>Don\'t miss out on this exciting opportunity to discover the beauty and diversity of the plant kingdom at the Botanic Garden of Munich. <strong>Mark your calendars for January 13th, 2023 and come and explore the gardens with fellow garden enthusiasts !</strong></p>','2023-01-28 14:49:47',1),(2,'How to keep your plants hydrated ? ','<p>Keeping your plants hydrated is essential for their health and growth. Without proper hydration, plants can become stressed and susceptible to disease. Here are five ways to ensure that your plants are getting the hydration they need:</p><p><br></p><ol><li><strong>Watering</strong>: The most obvious way to hydrate your plants is by watering them. The frequency of watering will depend on the type of plant, the size of the container, and the environmental conditions. It\'s important to avoid overwatering, which can lead to root rot and other problems.</li><li><strong>Mulching</strong>: Mulching is a great way to retain moisture in the soil. By applying a layer of mulch around your plants, you can slow down water evaporation and help the soil retain moisture.</li><li><strong>Using a moisture meter</strong>: A moisture meter is a simple tool that can help you determine when your plants need to be watered. This device can measure the moisture content of the soil and give you an accurate reading of how hydrated your plants are.</li><li><strong>Using a drip irrigation system</strong>: A drip irrigation system delivers water directly to the roots of your plants. This method of watering is particularly useful for plants in containers or for those planted in dry or hot climates.</li><li><strong>Misting</strong>: Misting your plants with water is a great way to provide them with a quick boost of hydration, especially for plants that are sensitive to dry air such as tropical plants.</li></ol><p><br></p><p>By implementing these five methods, you can ensure that your plants are getting the hydration they need to thrive. Remember that proper hydration is key to a healthy and beautiful garden.</p><p><br></p><p><br></p><p><br></p>','2023-01-28 14:49:47',1);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `creationDate` date DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_plant_userid_idx` (`user_id`),
  CONSTRAINT `fk_plant_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant`
--

LOCK TABLES `plant` WRITE;
/*!40000 ALTER TABLE `plant` DISABLE KEYS */;
INSERT INTO `plant` VALUES (1,'Calathea','Calathea',NULL,1),(2,'Pilea','Pilea',NULL,NULL);
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
INSERT INTO `user` VALUES (1,'Marion','Mizu','marionmizulalonde@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',1,'2023-01-28 02:49:55'),(2,'June','June','june@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$s96L8bP5O6Ab6f3FwKuHew$/6oWd2Ku1MAob+EMW+Zq4kYRQLaSCTICEkh2lCxEVDs',0,'2023-01-28 02:49:55');
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

-- Dump completed on 2023-01-28 20:07:08
