import i1 from "../assets/Rectangle 2.png"
import i2 from "../assets/Rectangle 3.png"
import i3 from "../assets/Rectangle 4.png"

const Prew = () => {
    return (
        <div style={{
            padding: 20,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: 100
            }}>
                <img src={i1} alt="img1" />
                <img src={i2} alt="img2" />
                <img src={i3} alt="img3" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7FFF00",
                    borderRadius: 20,
                    height: 200,
                    width: 400,
                    fontWeight: 800,
                    fontSize: 20
                }}>
                    <span>
                        Приключения:
                        <p>один из основных жанров</p>
                        <p>компьютерных игр,</p>
                        <p>представляющий собой</p>
                        <p>интерактивную историю</p>
                        <p>с главным героем</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FF0000",
                    borderRadius: 20,
                    height: 200,
                    width: 400,
                    fontWeight: 800,
                    fontSize: 20
                }}>
                    <span>
                        Стратегия:
                        <p>один из основных жанров</p>
                        <p>компьютерных игр,</p>
                        <p>в котором игроку</p>
                        <p>для победы необходимо</p>
                        <p>применять стратегическое мышление</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#6100FF",
                    borderRadius: 20,
                    height: 200,
                    width: 400,
                    fontWeight: 800,
                    fontSize: 20
                }}>
                    <span>
                        РПГ:
                        <p>жанр компьютерных игр,</p>
                        <p>в котором игрок управляет</p>
                        <p>одним или несколькими персонажами,</p>
                        <p>каждый из которых описан</p>
                        <p>набором численных характеристик.</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Prew;