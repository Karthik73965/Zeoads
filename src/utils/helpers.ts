import axios from "axios";

export async function verifyToken(token:string, clientId:string, clientSecret:string) {
    try {
        const form = new URLSearchParams();
        form.append('token', token);
        form.append('client_id', clientId);
        form.append('client_secret', clientSecret);
  
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
  
        const response = await axios.post("https://auth.otpless.app/auth/userInfo", form, {
          headers,
        });
  
        if (response.status === 200) {
          const userDetail = response.data;
          if (!userDetail) {
            throw new Error('Something went wrong');
          } else {
            userDetail.success = true;
            return userDetail;
          }
        } else {
          const { message } = response.data;
          throw new Error(message);
        }
    } catch (error:any) {
        if (error.response) {
          const { message } = error.response.data;
          throw new Error(message);
        } else {
            throw new Error('Something went wrong please try again');
        }
    }
}