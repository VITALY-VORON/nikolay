import Example from "./example";
import i1 from "../assets/Rectangle 10 .png"
import i2 from "../assets/Rectangle 11.png"
import i3 from "../assets/Rectangle 12.png"
import i4 from "../assets/Rectangle 13.png"
import i5 from "../assets/Rectangle 14.png"
import i6 from "../assets/Rectangle 15.png"
import i7 from "../assets/Rectangle 16.png"
import i8 from "../assets/Rectangle 17.png"
import i9 from "../assets/Rectangle 18.png"
import i10 from "../assets/Rectangle 19.png"

const Catalog = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 50,
                padding: 20
            }}>
                <Example img={i1} />
                <Example img={i2} />
                <Example img={i3} />
                <Example img={i4} />
                <Example img={i5} />
                <Example img={i6} />
                <Example img={i7} />
                <Example img={i8} />
                <Example img={i9} />
                <Example img={i10} />
            </div>
        </div>
    );
}

export default Catalog;