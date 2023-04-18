package ru.mirea.backend.services

import org.springframework.boot.context.properties.bind.Bindable.mapOf
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.util.LinkedMultiValueMap
import org.springframework.web.client.RestTemplate

@Service
class ImageService {


    fun getImageInfo(bytes: ByteArray): String {

        val template = RestTemplate()
        val header = HttpHeaders()
        val body = mapOf("file" to bytes)
        val httpEntity = HttpEntity(body, header)

        val response: ResponseEntity<String> = template.exchange(
            "http://localhost:6666/api/analyse",
            HttpMethod.POST,
            httpEntity,
            String::class.java
        )
        return response.body!!;


    }

}