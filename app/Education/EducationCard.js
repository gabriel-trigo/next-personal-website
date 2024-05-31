import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import { education } from '../text/education'

function EduCard() {
    return (
        <Card className="w-full bg-white">
            <Card.Body>
                <div className="flex">
                    <div className="basis-5/6">

                        <Card.Title>
                        { `${ education.institution } [GPA: ${ education.grade }]` }
                        </Card.Title>

                        <Card.Subtitle className="mb-2 text-muted">
                        { `Major: ${ education.major }` }
                        </Card.Subtitle>

                        <Card.Subtitle className="mb-2 text-muted">
                        { `Expected Graduation: ${ education.graduation }` }
                        </Card.Subtitle>
                    </div>

                    <div className="flex basis-1/6 items-center">
                        <Image width={ education.logoWidth } height={ education.logoHeight } src={ education.logoLink }/>
                    </div>

                </div>
                <Table bordered size="sm" className="text-center table-fixed bg-transparent">
                    <thead className="text-sm">
                        <tr>
                        <th> Fall 2021 </th>
                        <th> Spring 2022 </th>
                        <th> Fall 2022 </th>
                        <th> Spring 2023 </th>
                        <th> F/S 2024 </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm">
                        <tr>
                            <td rowSpan={2}> Intro. Comp. Science </td>
                            <td rowSpan={2}> Data Structures & Algorithms </td>
                            <td> Analysis of Algorithms I </td>
                            <td> Advanced Algorithms </td>
                            <td rowSpan={2}> Machine Learning </td>
                        </tr>

                        <tr>
                            <td> Advanced Programming </td>
                            <td> Artificial Intelligence </td>
                        </tr>

                        <tr>
                            <td rowSpan={2}> Multivariable Calculus </td>
                            <td rowSpan={2}> Computational Linear Algebra </td>
                            <td> Discrete Math </td>
                            <td> Comp. Science Theory </td>
                            <td> Intro. Databases </td>
                        </tr>

                        <tr>
                            <td> Probability </td>
                            <td> Statistical Inference </td>
                            <td> Competitive Programming </td>
                        </tr>
                    </tbody>
                </Table>
                <Card.Link className="bottom-0" href="/transcript.pdf">
                    { "Transcript" }
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default EduCard