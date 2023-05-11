package ru.mirea.backend.services

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import ru.mirea.backend.json.ClothTypeData
import ru.mirea.backend.model.ClothType
import ru.mirea.backend.repositories.ClothRepository

@Service
class ClothService @Autowired constructor(
    private val clothRepository: ClothRepository
) {

    fun getUniqueColors(): List<String> {
        return clothRepository.getUniqueColors()
    }

    fun getUniqueClothTypes(): List<ClothTypeData> {
        return clothRepository.getUniqueClothTypes().map {
            val data = ClothType.getData(it)
            ClothTypeData(data.first, data.second)
        }
    }
}