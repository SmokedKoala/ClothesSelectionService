package ru.mirea.backend.controllers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import ru.mirea.backend.json.ClothTypeData
import ru.mirea.backend.services.ClothService
import ru.mirea.backend.services.ImageService

@RestController
@CrossOrigin
@RequestMapping("/api/cloth")
class ClothController @Autowired constructor(
    private val clothService: ClothService
) {

    @GetMapping("/types")
    fun uploadImage(): List<ClothTypeData> {
        return clothService.getUniqueClothTypes()
    }
}