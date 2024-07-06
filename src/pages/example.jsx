import "./example.css"

const Example = ({ img }) => {
    return ( 
        <div style={{
            height: 400,
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            borderRadius: 20,
            boxShadow: "10px 5px 5px black"
        }}
        className="example"
        >
        </div>
     );
}
 
export default Example;