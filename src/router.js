//bu dosyada tüm navigasyon işlemleri dönecek
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MaterialRequestsScreen from './screens/materialRequests'
import PurchaseRequestsScreen from './screens/purchaseRequests'
import TmkfApprovalScreen from './screens/tmkfApproval'
import SisApprovalScreen from './screens/sisApproval'
import ScrapSalesApprovalScreen from './screens/scrapSalesApproval'
import SubcontractorSalesApprovalScreen from './screens/subcontractorSalesApproval'
import ContractApprovalScreen from './screens/contractApproval'
import DetailScreen from './screens/detail'
import App from './screens/index'
import LoginScren from './screens/login'
import SubjectDetailScreen from './screens/subjectDetails'
import ProfileScreen from './screens/profile'

const RouterComp = () => {
    return (
        <Router titleStyle={{ color: '#000' }}  >
            <Scene key='root' hideNavBar={true}>
                <Scene key='main'>
                    <Scene key='login'
                        component={LoginScren}
                        title='Login'
                        hideNavBar={true}
                        initial
                    />
                    <Scene key='home'
                        component={App}
                        title='Home'
                        hideNavBar={true}
                    />
                     <Scene key='materialRequests'
                        component={MaterialRequestsScreen}
                        title='Malzeme Talepleri'
                        hideNavBar={true}
                    />
                    <Scene key='purchaseRequests'
                        component={PurchaseRequestsScreen}
                        title='Satın Alma Talepleri'
                        hideNavBar={true}
                    />
                    <Scene key='tmkfApproval'
                        component={TmkfApprovalScreen}
                        title='TMKF Onayı'
                        hideNavBar={true}
                    />
                     <Scene key='sisApproval'
                        component={SisApprovalScreen}
                        title='SİS Onayı'
                        hideNavBar={true}
                    />
                     <Scene key='scrapSalesApproval'
                        component={ScrapSalesApprovalScreen}
                        title='Hurda Satış Onayı'
                        hideNavBar={true}
                    />
                    <Scene key='subcontractorSalesApproval'
                        component={SubcontractorSalesApprovalScreen}
                        title='Taşerona Satış Onayları'
                        hideNavBar={true}
                    />
                    <Scene key='contractApproval'
                        component={ContractApprovalScreen}
                        title='Sözleşme Onayları'
                        hideNavBar={true}
                    />
                     <Scene key='detail'
                        component={DetailScreen}
                        title='Detay'
                        hideNavBar={true}
                    />
                     <Scene key='subjectdetail'
                        component={SubjectDetailScreen}
                        title='Konu Detayları'
                        hideNavBar={true}
                    />
                      <Scene key='profile'
                        component={ProfileScreen}
                        title='Profil'
                        hideNavBar={true}
                    />
                </Scene>
               
               
            </Scene>
        </Router>
    )
}
export default RouterComp