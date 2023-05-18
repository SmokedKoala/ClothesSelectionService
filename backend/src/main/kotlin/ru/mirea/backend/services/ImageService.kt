package ru.mirea.backend.services

import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import ru.mirea.backend.model.ClothType
import ru.mirea.backend.model.ColorType
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

        ColorType.values().forEach {
            result = result.replace(it.hex, it.rus)
        }
        ClothType.values().forEach {
            result = result.replace(it.key.toString(), it.rus)
        }

        return result
    }

}