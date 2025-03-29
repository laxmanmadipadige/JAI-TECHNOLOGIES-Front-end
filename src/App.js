import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header' //
import HomePage from './Components/HomePage';
import QuoteAndTipGenerator from './Components/QuoteAndTipGenerator';
import FeaturesSection from './pages/FeaturesSection';
import ProductsSection from './pages/ProductsSection';
import ServicesSection from './pages/ServicesSection';
import ComprehensiveIT from './Components/ComprehensiveIT'; //
import Footer from './Components/Footer';  //



import CogniTip from './product/CogniTip';
import CogniQuotes from './product/CogniQuotes';
import AboutUs from './pages/Aboutus'; // Ensure the path to AboutUs component is correct
import ServiceMain from './services/ServiceMain';
import ContactUs from './pages/ContactUs'  //



import AIConsulting from './services/supportservices/AIConsulting';
import AIDataanalysis from './services/supportservices/AIDataanalysis';
import AIPoweredsdlc from './services/supportservices/AIPoweredsdlc';
import Compvision from './services/supportservices/Compvision';
import Personalizationservices from './services/supportservices/Personalizationservices';
import AIpoweredautomation from './services/supportservices/AIpoweredautomation';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    {/* Navigation */}
                    
                   <Header />
                    {/* <Solutions />  */}

                    {/* Define Routes */}
                    <Routes>
                        {/* Home Route */}
                        <Route 
                            path ="/solutions"
                            element ={
                             <>
                                
                                <ServiceMain />
                                <ServicesSection />
                                <ComprehensiveIT />
                                <Footer />

                            </>
                            }
                            />
                        <Route
                            path="/"
                            element={
                                <>
                                    <HomePage />
                                    
                                    <QuoteAndTipGenerator />
                                    <FeaturesSection />
                                    <ProductsSection />
                                    <ServicesSection />
                                    <ComprehensiveIT />
                                    <Footer />
                                </>
                            }
                        />

                       <Route path='/CogniTip' element={<CogniTip />} /> 
                       <Route path='/CogniQuotes' element={<CogniQuotes />} />
                        
                        {/* About Us Route */}
                        <Route path="/aboutus" element={<AboutUs />} />

                        
                        <Route path="/aisdlc" element={<AIPoweredsdlc />} />
                        <Route path="/aiconsulting" element={<AIConsulting />} />
                        <Route path="/aipowereddataanalysis" element={<AIDataanalysis />} />
                        <Route path="/computervisionsolutions" element={<Compvision />} />
                        <Route path="/aia" element={<AIpoweredautomation/>} />
                        <Route path="/personalizationservices" element={<Personalizationservices/>} />

                        {/*Contacy Us Route  */}
                        <Route path="/contactus" element={<ContactUs />} />
                    </Routes>
                    
                </header>
            </div>
        </Router>
    );
}

export default App;
