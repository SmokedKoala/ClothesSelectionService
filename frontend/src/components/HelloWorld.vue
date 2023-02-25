<template>
  <div class="hello">
    <input type="file" @change="onFileSelected">
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      selectedFile: null,
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
