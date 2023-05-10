package ru.mirea.backend.services

import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.io.BufferedOutputStream
import java.io.File
import java.io.FileOutputStream
import java.util.*

@Service
class ImageService {

    fun getImageInfo(bytes: ByteArray): String {
        val fileName = saveImageInLocalStorage(bytes)
        return getImageData(fileName)
    }

    private fun saveImageInLocalStorage(bytes: ByteArray): String {
        val fileName = UUID.randomUUID()
        val stream =
            BufferedOutputStream(FileOutputStream(File("C:\\Users\\user\\Desktop\\java\\ClothesSelectionService\\python_back\\data\\${fileName}.jpg")))
        stream.write(bytes)
        stream.close()
        return "data/$fileName.jpg"
    }

    private fun getImageData(fileName: String): String {
        val template = RestTemplate()
        val header = HttpHeaders()
        val body = mapOf("file" to fileName)
        val httpEntity = HttpEntity(body, header)

        val response: ResponseEntity<String> = template.exchange(
            "http://localhost:6666/api/analyse",
            HttpMethod.POST,
            httpEntity,
            String::class.java
        )
        var result =  response.body!!
        val clothClasses = mapOf(
            "\"0\"" to "\"Блейзер\"",
            "\"1\"" to "\"Блузка\"",
            "\"2\"" to "\"Платье\"",
            "\"3\"" to "\"Толстовка\"",
            "\"4\"" to "\"Лонгслив\"",
            "\"5\"" to "\"Верхняя одежда\"",
            "\"6\"" to "\"Штаны\"",
            "\"7\"" to "\"Поло\"",
            "\"8\"" to "\"Рубашка\"",
            "\"9\"" to "\"Туфли\"",
            "\"10\"" to "\"Шорты\"",
            "\"11\"" to "\"Юбка\"",
            "\"12\"" to "\"Футболка\"",
            "\"13\"" to "\"Топ\""
        )
        for (i in clothClasses) {
            result = result.replace(i.key, i.value)
        }

        return result
    }

}