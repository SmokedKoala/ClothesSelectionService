package ru.mirea.backend.controllers

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
class UploadController {

    @CrossOrigin
    @PostMapping("/upload")
    fun uploadImage(@RequestParam("photo") photo: MultipartFile):String {
        return photo.bytes.toString()
    }
}