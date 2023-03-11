<template>
  <div class="hello">

    <!--    до загрузки фото-->
    <div class="image-upload" v-if="!selectedFile">
      <label for="file-input">
        <img src="../assets/plus.png"/>
      </label>
      <input id="file-input" type="file" accept="image/*" @change="onFileSelected">
    </div>

    <!-- после загрузки фото-->
    <div v-if="preview">

      <!--      блок с загруженным изображением-->
      <div class="block-left">
        <img :src="preview" class="img-preview">
      </div>

      <!--      блок с информацией по фото и комплекту-->
      <div class="block-right">

        <!--        блок с информацией по фото-->
        <div class="block-uploaded-info">
          <h3 style="display:inline;">основные цвета: </h3>
          <div id="selected-color" :style="{'background-color':clothInfo.color}"/>
          <h3>тип одежды: {{clothInfo.type}}</h3>
        </div>

        <!--        блок с информацией по комплекту-->
        <div class="block-offer-info">

        </div>
      </div>

      <br>
      <button @click="onFileUpload">Начать анализ</button>
    </div>

  </div>
</template>

<style scoped>
.image-upload > input {
  display: none;
}

.image-upload img {
  width: 80px;
  cursor: pointer;
}

.img-preview {
  min-height: 400px;
  min-width: 200px;

}

.block-left {
  width: 50%;
  height: 400px;
  overflow: auto;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block-right {
  width: 50%;
  height: 400px;
  overflow: auto;
}

.block-uploaded-info {
  height: 50%;
}

#selected-color {
  height: 50px;
  width: 50px;
  outline: 2px solid #000;
  display:inline-block;

}

.block-offer-info {
  height: 50%;
  background-color: #56ec2a;
  overflow: auto;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      selectedFile: null,
      preview: null,
      clothInfo: null,
    }
  },
  methods: {
    onFileSelected(event) {
      const input = event.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.selectedFile = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
      //TODO заменить на вызов бэка
      this.clothInfo = {type: "футболка", color: ["#ff8300"]}
    },
    onFileUpload() {
      const formData = new FormData
      formData.append('photo', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:9000/upload', formData,
          {
            onUploadProgress: uploadEvent => {
              console.log(Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
            }
          })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
