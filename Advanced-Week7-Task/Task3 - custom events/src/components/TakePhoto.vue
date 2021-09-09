<!--  This is HTML template for take Photo / Upload Photo page -->
<template>
  <div id="takephoto" class="web-camera-container">
    <!-- camera button class -->
    <div class="camera-button">
      <button
        type="button"
        class="TakeButton"
        :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }"
        @click="toggleCamera"
      >
        <!-- here using V if and V else to determine if camera is open or shut -->
        <span v-if="!isCameraOpen">Take Picture</span>
        <span v-else>Close Camera</span>
      </button>
      <!-- Button to upload images-->
      <button class="UploadButton">Upload Image</button>
    </div>
    <div v-show="isCameraOpen && isLoading" class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!--Vif and v show for camera open and camera is loading -->
    <div
      v-if="isCameraOpen"
      v-show="!isLoading"
      class="camera-box"
      :class="{ flash: isShotPhoto }"
    >
      <!--Shows if photo is not taken, set height and width -->
      <div class="camera-shutter" :class="{ flash: isShotPhoto }"></div>
      <video class="video"
        v-show="!isPhotoTaken"
        ref="camera"
        :width="450"
        :height="337.5"
        autoplay
      ></video>
      <!--Shows after photo taken to display iamge in box -->
      <canvas
        v-show="isPhotoTaken"
        id="photoTaken"
        ref="canvas"
        :width="450"
        :height="337.5"
      ></canvas>
    </div>
    <!--v if for camera open and loading -->
    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
      <button type="button" class="button" @click="takePhoto">
        <!-- Camera icon from web, would like to use local image in main release -->
        <img
          src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"
        />
      </button>
    </div>
    <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
      <a
        id="downloadPhoto"
        download="my-photo.jpg"
        class="button"
        role="button"
        @click="downloadImage"
      >
        Save
      </a>
    </div>
  </div>
</template>
<script>
export default {
  //export as TakePhoto Component
  name: "TakePhoto",
  computed: {},
  data() {
    //Return data for methods and V statemetns
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: "#",
    };
  },
  methods: {
    //Method to toggle camera on and off
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    //method to create Camera element works in major browsers such as Chrome, Safari on Desktop and Mobile
    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.isLoading = false;
          alert("Sorry this browser is not supported.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    },
    //Take the photo method
    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;
        //here we set a time out incase the user leaves it and forgets
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    //Method to download the image, this will in final project upload the image to Firebase and add to Reel
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
  },
};
</script>
<style scoped lang="scss">
//Styling for Photo add / take section
//Desktop Version
body {
  display: flex;
  justify-content: center;
}
.TakeButton {
  background-color: #ffc107;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.12em;
}
.TakeButton:hover {
  color: #000000;
  background-color: #ffc107;
   
}
.UploadButton {
 background-color: #ffc107;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.12em;
  
}
.UploadButton:hover {
  color: #000000;
  background-color: #ffc107;

}
//Container around Image capture
.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  display:inline-block;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  height: 50%;
  .camera-button {
    margin-bottom: 2rem;
  }
  //CSS for camera box and elements within
  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;
      display: flex;

      &.flash {
        opacity: 1;
      }
    }
  }
  .camera-button{
    margin-top: 1%;
    height: 5%;
  }
  .camera-shoot {
    margin: 1rem 0;
    //camera button styling
    button {
      height: 60px;
      width: 60px;
      display: inline-block;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }
  //loading camera styling
  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }
    //loading circle for camera
    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  //frame based animation for camera operation
  @keyframes preload {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  //Mobile CSS config
  @media screen and (max-width: 759px) {
    //container for take image container
    .web-camera-container {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 2rem;
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
      margin-left: 5rem;
      //flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 4px;
 
      .camera-button {
        margin-bottom: 20%;
        display: inline-block;
      }
    }
    body {
      display: flex;
      justify-content: center;
      max-width: 100%;
      max-height: 100%;
    }
    .camera-box {
    .camera-shutter {
      opacity: 0;
      background-color: #fff;
      position: absolute;
      display: inline-flex;
      max-width: 100%;
      max-height: 100%;
      
      &.flash {
        opacity: 1;
      }
    }
    }
    .video{
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>