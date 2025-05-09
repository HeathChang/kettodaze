import { Button, ContentBody, ContentHeader, DangerZone, SettingItem, ToggleSwitch } from "../MyPage.styled";
import { ChevronRight, Trash2 } from "lucide-react";
import type React from "react";
import { iDefaultInterface } from "../../../types/types";

interface iSettings extends iDefaultInterface{}


const SettingPage = (props: iSettings) => {
    return (
        <>
            <ContentHeader>
                <h2>설정</h2>
                <p>계정 설정을 관리할 수 있습니다.</p>
            </ContentHeader>
            <ContentBody>
                <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>알림 설정</h3>
                <SettingItem>
                    <div className="setting-info">
                        <h4>이메일 알림</h4>
                        <p>중요한 알림과 업데이트를 이메일로 받습니다.</p>
                    </div>
                    <ToggleSwitch>
                        <input type="checkbox" defaultChecked />
                        <span></span>
                    </ToggleSwitch>
                </SettingItem>
                <SettingItem>
                    <div className="setting-info">
                        <h4>푸시 알림</h4>
                        <p>앱 푸시 알림을 받습니다.</p>
                    </div>
                    <ToggleSwitch>
                        <input type="checkbox" defaultChecked />
                        <span></span>
                    </ToggleSwitch>
                </SettingItem>
                <SettingItem>
                    <div className="setting-info">
                        <h4>마케팅 알림</h4>
                        <p>이벤트 및 프로모션 정보를 받습니다.</p>
                    </div>
                    <ToggleSwitch>
                        <input type="checkbox" />
                        <span></span>
                    </ToggleSwitch>
                </SettingItem>

                <h3 style={{ margin: "1.5rem 0 1rem", fontSize: "1.1rem" }}>앱 설정</h3>
                <SettingItem>
                    <div className="setting-info">
                        <h4>다크 모드</h4>
                        <p>어두운 테마로 전환합니다.</p>
                    </div>
                    <ToggleSwitch>
                        <input type="checkbox" />
                        <span></span>
                    </ToggleSwitch>
                </SettingItem>
                <SettingItem>
                    <div className="setting-info">
                        <h4>언어 설정</h4>
                        <p>앱 언어를 변경합니다.</p>
                    </div>
                    <Button variant="secondary" style={{ padding: "0.5rem 1rem" }}>
                        한국어 <ChevronRight size={16} />
                    </Button>
                </SettingItem>

                <DangerZone>
                    <h3>위험 구역</h3>
                    <p>계정을 삭제하면 모든 데이터가 영구적으로 삭제되며 복구할 수 없습니다.</p>
                    <Button variant="danger" onClick={props.onClick}>
                        <Trash2 size={16} />
                        계정 삭제
                    </Button>
                </DangerZone>
            </ContentBody>
        </>
    )
}

export default SettingPage;