package ru.mirea.backend.repositories

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import ru.mirea.backend.model.Cloth

interface ClothRepository: CrudRepository<Cloth, Long> {

    @Query("SELECT DISTINCT c.color FROM Cloth c")
    fun getUniqueColors(): List<String>

    @Query("SELECT DISTINCT c.type FROM Cloth c")
    fun getUniqueClothTypes(): List<String>
}