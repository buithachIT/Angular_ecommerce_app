import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from '@angular/fire/auth';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;

  constructor(private auth: Auth, private router: Router) {}  

  async login(type:'backend'| 'google', email?: string, password?: string) {
      try {
          if (type === 'google') {
              const provider = new GoogleAuthProvider();
              const result = await signInWithPopup(this.auth, provider);
            this.user = result.user;
            localStorage.setItem('user', JSON.stringify(this.user));
             const token = await result.user.getIdToken();
            localStorage.setItem('access_token', token);
              console.log('Đăng nhập thành công:', this.user);
            this.router.navigate(['']);
            window.location.reload();
          } else {
              if (!email || !password) throw new Error('Thiếu email hoặc mật khẩu!');
        
          
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            
            this.user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(this.user));

            const token = await this.user.getIdToken();
            localStorage.setItem('access_token', token);
            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Successful!',
                                showConfirmButton: false,
                                timer: 1500
      }).then(() => {
  this.router.navigate(['']);
        window.location.reload(); 
});
            
       
          }
           console.log(`Người dùng đăng nhập từ ${type}:`, this.user);
      return this.user;
      }
      catch(error) {
           console.error(`Lỗi đăng nhập ${type}:`, error);
      throw error;
      }
      
  }
  //Register
  async registerWithMail(fullName: string, email: string, password: string) {
    email = email.trim(); 
    
    try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      
         await updateProfile(user, { displayName: fullName });
        console.log("Đăng ký thành công:", fullName);
        return user;
    } catch(error: any) {
    console.error("Lỗi đăng ký:", error.message);
    Swal.fire("Lỗi!", error.message, "error");
    throw error;

    }
}


  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    signOut(this.auth);
    this.user = null;
      console.log('Đã đăng xuất');
    window.location.reload();
    }
    
    getCurrentUser() {
    return this.user || JSON.parse(localStorage.getItem('user') || 'null');
  }
  
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      return 'Đã gửi email đặt lại mật khẩu!';
    } catch (error) {
      console.error('Lỗi đặt lại mật khẩu:', error);
      throw error;
    }
  }
}
