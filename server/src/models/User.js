module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING
  })
//เพิ่ม --- comparePassword คือประกาศชื่อเมธอด รับพารามิเตอร์ คือ password
// this คือ Userของตัวโมเดล email

   User.prototype.comparePassword = function (password) {
    if (password == this.password) {
        return true
    }
    return false
  }

  User.associate = function(models) {}

  //รีเทิร์นบรรทัดที่ถูกเรียกมา User
  return User
}