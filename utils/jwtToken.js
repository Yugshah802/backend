
export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expire: new Date(
        Date.now() + process.env.COOKIE_EXPIRE 
      ),
      secure: true,
      httpOnly: true,
    };
    console.log(token);
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };