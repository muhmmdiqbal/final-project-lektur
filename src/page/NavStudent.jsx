import React from 'react'
import {Row, Col} from 'react-bootstrap'

const NavStudent = () => {
    return (
        <div>
            <div className='coursesBoxUnderline'>
                <Row className='coursesBoxRow'>
                    <Col>
                        <h4 className="h4student"><a href="StudentDashboard" className="Judul stretched-link">Courses</a></h4>
                    </Col>
                    <Col>
                        <h4><a href="StudentAssesment" className="Judul stretched-link">Assesment</a></h4>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NavStudent