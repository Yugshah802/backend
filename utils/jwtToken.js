
export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expire: new Date(
        Date.now() + process.env.COOKIE_EXPIRE 
      ),
      httpOnly: true, // Set httpOnly to true,
      // secure: true,
        // overwrite:true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };