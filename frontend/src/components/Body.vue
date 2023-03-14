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
          <div class="block-uploaded-info__color">
          <h3 style="display:inline;">основные цвета: </h3>
          <div class="selected-color" :style="{'background-color':clothInfo.color}"/>
          </div>
          <h3>тип одежды: {{clothInfo.type}}</h3>
        </div>

        <!--        блок с информацией по комплекту-->
        <div class="block-offer-info">
          <div class="block-uploaded-info__color">
            <h3 style="display:inline;">предлагаемые цвета: </h3>
            <div class="selected-color" :style="{'background-color':clothInfo.color}"/>
          </div>
          <h3>предлагаемый комплект: {{clothInfo.type}}</h3>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block-uploaded-info__color {
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.selected-color {
  height: 25px;
  width: 25px;
  outline: 2px solid #000;
  display:inline-block;

}

.block-offer-info {
  height: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      this.clothInfo = {type: "футболка", color: ["#ffede0"], combination_color:[["#001a68", "#ffbf87"], ["#00ffd1", "#ff8300"]]}
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
