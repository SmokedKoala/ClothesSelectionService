//package ru.mirea.backend.services
//
////import org.assertj.core.api.Assertions.assertThat
////import org.junit.jupiter.api.Test
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.test.context.SpringBootTest
//import ru.mirea.backend.model.Cloth
//import ru.mirea.backend.repositories.ClothRepository
//
//@SpringBootTest
//internal class ClothServiceTest @Autowired constructor(
//    private val clothService: ClothService,
//    private val clothRepository: ClothRepository
//) {
////    @Test
////    fun testGetClothTypeCount() {
////        clothRepository.save(Cloth(type = "trousers"))
////        clothRepository.save(Cloth(type = "shirt"))
////
////        clothService.getUniqueClothTypes().apply {
////            assertThat(size).isEqualTo(2)
////            assertThat(this).extracting("name").containsExactlyInAnyOrder("Штаны", "Рубашка")
////        }
////    }
//}