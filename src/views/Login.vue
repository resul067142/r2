
<template>
  <main class="form-signin m-auto w-100">
    <div class="row ">
      <div class="col-12">

        <button @click="handleLogin" class="btn btn-primary"><i class="bi bi-google"></i> Google Hesabınız ile Giriş</button>

        <i class="bi bi-google"></i>
      </div>
    </div>
  </main>
</template>



<script>
import {auth} from '../firebase/config'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {useRouter} from 'vue-router'


export default {
  setup() {

    const router=useRouter();
    const handleLogin=()=>{
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
          .then(sonuc=>{
            //console.log(sonuc.user);
            router.push({name:'Home'})
          })
    }

    return {handleLogin}

  },
}
</script>

