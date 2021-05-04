const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const fs = require("fs");

const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      fs.readFile("./db/book.json", "utf-8", (err, data) => {
        if (err) {
          console.log("some error occured");
        }
        const parsedData = JSON.parse(data);
        const user = parsedData.find((obj) => obj.id === jwt_payload.id);
        if (!user) {
          console.log("User not found");
        }
        return done(null, user);
      });
    })
  );
};
