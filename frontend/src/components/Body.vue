<template>
  <div class="hello">

    <div class="image-upload" v-if="!selectedFile">
      <label for="file-input">
        <img src="../assets/plus.png"/>
      </label>
      <input id="file-input" type="file" accept="image/*" @change="onFileSelected">
    </div>

    <div v-if="preview">
      <img :src="preview" class="img-preview">
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
  max-height: 400px;
  max-width: 200px;
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
        this.selectedFile=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
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
