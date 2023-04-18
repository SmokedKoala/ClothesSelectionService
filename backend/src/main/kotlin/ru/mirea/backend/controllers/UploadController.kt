package ru.mirea.backend.controllers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import ru.mirea.backend.services.ImageService

@RestController
class UploadController {

    @Autowired
    lateinit var imageService: ImageService

    @CrossOrigin
    @PostMapping("/upload")
    fun uploadImage(@RequestParam("photo") photo: MultipartFile):String {
        return imageService.getImageInfo(photo.bytes)
    }
}