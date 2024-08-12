import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function SoftwareView() {
    let navigate = useNavigate();
    let handleFileInput = () => {};
    let submitClick = (type, e) => {
        //화면갱신 방지
        e.preventDefault();

        let Swt_toolname_checker = document.querySelector("#is_Swt_toolname").value;
        let Swt_demo_site_checker = document.querySelector("#is_Swt_demo_site").value;
        let Giturl_checker = document.querySelector("#is_Giturl").value;
        let Comments_checker = document.querySelector("#is_Comments").value;
        let Swt_function_checker = document.querySelector("#is_Swt_function").value;

        let fnValidate = (e) => {
            if (Swt_toolname_checker === '') {
                document.querySelector('#is_Swt_toolname').setAttribute('class', 'border_validate_err')
                alert('툴 이름을 다시 확인해주세요.')
                return false;
            }
            document.querySelector('#is_Swt_toolname').removeAttribute('class');

            if (Swt_demo_site_checker === '') {
                document.querySelector('#is_Swt_demo_site').setAttribute('class', 'border_validate_err')
                alert('데모 URL을 다시 확인해주세요.')
                return false;
            }
            document.querySelector('#is_Swt_demo_site').removeAttribute('class');

            if (Giturl_checker === '') {
                document.querySelector('#is_Giturl').setAttribute('class', 'border_validate_err')
                alert('Github URL을 다시 확인해주세요.')
                return false;
            }
            document.querySelector('#is_Giturl').removeAttribute('class');

            if (Comments_checker === '') {
                document.querySelector('#is_Comments').setAttribute('class', 'border_validate_err')
                alert('설명을 다시 확인해주세요.')
                return false;
            }
            document.querySelector('#is_Comments').removeAttribute('class');

            if (Swt_function_checker === '') {
                document.querySelector('#is_Swt_function').setAttribute('class', 'border_validate_err')
                alert('상세기능을 다시 확인해주세요.')
                return false;
            }
            document.querySelector('#is_Swt_function').removeAttribute('class');
            return true;
        }
    };

    if(fnValidate()) {
        const formData = new FormData(document.querySelector("#frm"));
        var Json_form = JSON.stringify(Object.fromEntries(formData));
        const response = fetch('/api/tool/swtool?type=' + type, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: Json_form,
        }).then(response => {
            if(response.ok) {
                throw new Error(`${response.status} 에러 발생`);
            }
            return response.json();
        })
    }

    return (
        <section>
            <div className="container">
                <div>
                    <h2>Software Tools 등록/수정</h2>
                </div>
                <div>
                    <form name="frm" id="frm" action="" method="post" >
                        <input id="is_Swtcode" type="hidden" name="is_Swtcode" />
                        <input id="is_Email" type="hidden" name="is_Email" value="guest" />
                        <p style={{ "textAlign": "right" }}>
                            (*)표시는 필수입력사항 입니다.
                        </p>
                        <div >
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>
                                            <label htmlFor="is_Swt_toolname">툴 이름<span>(*)</span></label>
                                        </th>
                                        <td>
                                            <input type="text" name="is_Swt_toolname" id="is_Swt_toolname" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label htmlFor="is_Swt_demo_site">데모 URL(*)</label>
                                        </th>
                                        <td>
                                            <input type="text" name="is_Swt_demo_site" id="is_Swt_demo_site" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label htmlFor="is_Giturl">Github URL(*)</label>
                                        </th>
                                        <td>
                                            <input type="text" name="is_Giturl" id="is_Giturl" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label htmlFor="is_Comments">설명(*)</label>
                                        </th>
                                        <td>
                                            <textarea name="is_Comments" id="is_Comments" rows="" cols=""></textarea>
                                        </td>
                                    </tr>
                                    <tr className="div_tb_tr fileb">
                                        <th>
                                            메뉴얼 파일 #1
                                        </th>
                                        <td>
                                            <input type="file" id="uploadBtn1" onChange={e => handleFileInput('manual', e)} />
                                            <div id="upload_menual">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            메인 이미지
                                        </th>
                                        <td>
                                            <input type="file" id="imageSelect" onChange={e => handleFileInput('file', e)} />
                                            <div id="upload_img">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            라벨 이미지
                                        </th>
                                        <td >
                                            <input type="file" id="imageSelect2" onChange={e => handleFileInput('file2', e)} />
                                            <div id="upload_img2">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label htmlFor="is_Swt_function">상세 기능(*)</label>
                                        </th>
                                        <td>
                                            <textarea name="is_Swt_function" id="is_Swt_function" rows="" cols=""></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{ "marginBottom": "44px" }}>
                                <Link to={'/SoftwareList'} ><span className="badge bg-secondary">취소</span></Link>
                                <a href="" onClick={(e) => submitClick('save', e)}><span className="badge bg-primary">저장</span></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}


