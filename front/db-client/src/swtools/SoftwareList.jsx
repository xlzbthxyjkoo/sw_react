import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from  'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SoftwareList(props) {
    const [append_SwList, setAppend_SwList] = useState([]);

    let callListApi = async () => {
        axios.post('/api/tool/swtool?type=list', {

        }).then(response => {
            try {
                let result = [];
                let SwToolList = response.data;
                for(let i = 0; i < SwToolList.json.length; i++) {
                    let data = SwToolList.json[i];
                    let date = data.reg_date;
                    let year = date.substr(0, 4);
                    let month= date.substr(4, 2);
                    let day = date.substr(6, 2);
                    let reg_date = year + '.' + month + '.' + day;

                    result.push(
                        <tr key={i}>
                            <td>{data.swt_toolname}</td>
                            <td>{data.swt_function}</td>
                            <td>{reg_date}</td>
                            <td>
                                <Link to={'/softwareView/' + data.swt_code}>
                                    <span className="badge bg-info text-dark">수정</span>
                                </Link>
                                <a href='#n'>
                                    <span className="badge bg-danger">삭제</span>
                                </a>
                            </td>
                        </tr>
                    )
                }
                setAppend_SwList(result);
            } catch(error) {
                alert('목록작업중 오류');
            }
        }).catch(error => {
            alert('axios 호출 에러');
            return false;
        });
    };
    useEffect(() => {
        callListApi();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="col-md-12">
                    <h2>Software Tools 목록</h2>
                    <div>
                        <Link to={'/softwareView/register'}>Tool 등록</Link>
                    </div>
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>툴 이름</th>
                                    <th>기능</th>
                                    <th>등록일</th>
                                    <th>편집</th>
                                </tr>
                            </thead>
                        </table>
                        <table className="table table-striped">
                            <tbody>
                                {append_SwList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default SoftwareList;