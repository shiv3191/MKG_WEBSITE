import "./PositionsAvailable.css";

function PositionsAvailable() {
    return (
        <div className="positions-container mt100">
            {/* Heading */}
            <div className="heading-container">
                <h1 className="positions-heading">Positions Available</h1>
            </div>

            {/* Content */}
            <div className="content-container">
                <div className="positions-section">
                    <ul>
                        <li>
                            Advertisement for a Research Associate/Postdoctoral Position
                            <br />
                            http://www.iiti.ac.in/Careers/docs/SRF_JRF_POSTDOC/feb2018/RA%20Position_26feb2018.pdf
                        </li>
                        <li>
                            Two SRF positions are available in a DST-sponsored project. If you are interested, please contact me.
                            <br />
                            http://www.iiti.ac.in/Careers/docs/SRF_JRF_POSTDOC/feb2018/SRF%20Positions_MKGOYAL.pdf
                        </li>
                        <li>
                            If you have topped your university/college, or qualified in GATE or NET exam, please send your brief CV to mkgoyal@iiti.ac.in.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PositionsAvailable;
