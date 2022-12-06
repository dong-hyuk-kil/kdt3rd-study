
const Visitor = function (Sequelize, DataTypes) {
// Sequlize: model/index.js 의 sequelize
// Datatypes: model/index.js의 Sequelize

const model = Sequelize.define(
    'visitor',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type:DataTypes.STRING(10),
            allowNull: false,

        },
        comment: {
            type:DataTypes.TEXT('medium')

        }
    },
    {
        tableName: 'visitor', // 실제 db 테이블 이름
        freezeTableName: true, // 테이블 이름 고정
        timestamps:false, // 데이터가 추가/수정 시간을 자동으로 컬럼 만들어서 기록

    }
);

return model;
};


module.exports = Visitor;