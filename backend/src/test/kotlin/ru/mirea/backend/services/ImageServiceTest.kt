//package ru.mirea.backend.services
//
//import org.assertj.core.api.Assertions.assertThat
//import org.junit.jupiter.api.Test
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.test.context.SpringBootTest
//import java.io.File
//
//@SpringBootTest
//internal class ImageServiceTest @Autowired constructor(
//    private val imageService: ImageService
//) {
//    @Test
//    fun testGetClothInfo() {
//        val file = File("/test/test.jpg").readBytes()
//
//        val result = imageService.getImageInfo(file)
//
//        assertThat(result).isEqualTo("""
//            {
//              "cloth": "Футболка",
//              "imageColor": "#232524",
//              "setCloth": [
//                ["Штаны", "Рубашка"],
//                ["Толстовка",Штаны"],
//                ["Верхняя одежда", "Штаны"]
//              ],
//              "setColors": [
//                ["#242323", "#242324"],
//                ["#242423", "#232324"],
//                ["#3ea270","#8cedbc"]
//              ]
//            }
//        """.trimIndent())
//    }
//}