import ProtoTypes from "prop-types";

const FuncComponent = (props) => {
  const teacher = "션";
  const { name, students } = props;

  return (
    <div>
      <h1>Hi {teacher}</h1>
      <p>
        여기는 functional component! <b>{props.name}</b> 수업시간! 학생수는{" "}
        <b>{students}</b>입니다
      </p>
    </div>
  );
};

FuncComponent.defaultProps = {
  name: "얏호",
  students: 0,
};

FuncComponent.protoTypes = {
  name: ProtoTypes.string.isRequired,
  students: ProtoTypes.number,
};

export default FuncComponent;
