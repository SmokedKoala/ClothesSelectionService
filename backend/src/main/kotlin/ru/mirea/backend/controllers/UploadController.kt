package ru.mirea.backend.controllers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import ru.mirea.backend.services.ImageService

@RestController
@CrossOrigin
@RequestMapping("/api/photo")
class UploadController @Autowired constructor(
    private val imageService: ImageService
) {

    @PostMapping("/upload")
    fun uploadImage(@RequestParam("photo") photo: MultipartFile):String {
        return imageService.getImageInfo(photo.bytes)
    }
}