
export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expire: new Date(
        Date.now() + process.env.COOKIE_EXPIRE 
      ),
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    };
    console.log(token);
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };