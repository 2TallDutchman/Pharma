import React, { useState } from 'react';
import { FlaskConical, Leaf, Factory, Truck, Package, Cloud, AlertTriangle, Shield, Zap, Workflow, Layers, GitFork, Building2, Scale, Brain, Wifi, Lock, Recycle, Droplets, Flame, TreePine, DollarSign, Globe, Briefcase, Pill, Hospital, User, Trash2, Blend, Globe2, Link, XCircle, RefreshCcw, Sprout, Store, Atom, PackagePlus, ArrowRightCircle, Syringe } from 'lucide-react'; // Added Syringe icon

// Main App Component
const App = () => {
  const [showEnvironmentalLayer, setShowEnvironmentalLayer] = useState(false);
  const [showStructureLayer, setShowStructureLayer] = useState(false);
  const [showRegulatoryDigitalLayer, setShowRegulatoryDigitalLayer] = useState(false);
  const [showComminglingLayer, setShowComminglingLayer] = useState(false);
  const [showCircularityLayer, setShowCircularityLayer] = useState(false);
  const [showCompanyFlow, setShowCompanyFlow] = useState(false);

  // Define the core stages and actors for the base layer (more granular upstream)
  const stages = [
    { id: 'rd', name: 'R&D', icon: <FlaskConical className="w-12 h-12" />, actors: ['Pharma Co.', 'CROs', 'Academia'] },
    { id: 'resourceExtraction', name: 'Resource Extraction & Primary Proc.', icon: <Sprout className="w-12 h-12" />, actors: ['Farmers', 'Miners', 'Oil/Gas Extractors', 'Timber Harvesters', 'Primary Processors'] },
    { id: 'commodityTrading', name: 'Commodity Trading & Aggregation', icon: <Store className="w-12 h-12" />, actors: ['Commodity Traders', 'Brokers', 'Aggregators', 'Large-scale Storage'] },
    { id: 'specializedProcessing', name: 'Specialized Material Proc. & Deriv. Creation', icon: <Atom className="w-12 h-12" />, actors: ['Specialty Chemical Mfrs', 'Oleochemical Producers', 'Advanced Refineries', 'Chemical Wholesalers/Distributors'] },
    { id: 'apiExcipientMfg', name: 'API/Excipient Mfg.', icon: <Factory className="w-12 h-12" />, actors: ['CDMOs', 'CMOs', 'Specialized API Mfrs', 'Pharma In-house Production'] }, // Shortened name
    { id: 'drugProductMfg', name: 'Drug Product Mfg. & Formulation', icon: <PackagePlus className="w-12 h-12" />, actors: ['Branded Pharma Co.', 'Partnering Pharma Co.', 'CDMOs (Finished Product)'] },
    { id: 'distribution', name: 'Distribution & Logistics', icon: <Truck className="w-12 h-12" />, actors: ['Wholesale Distributors', 'Specialty Distributors', 'Procurement Agents'] },
    { id: 'endoflife', name: 'Dispensing & End-of-Life', icon: <Package className="w-12 h-12" />, actors: ['Pharmacies/Hospitals', 'Patients', 'Waste Management'] },
  ];

  // Data for environmental layer (updated for new stages)
  const environmentalData = {
    rd: { // Added R&D environmental data for completeness, though often less direct material impact
      hotspot: 'yellow',
      commodities: [],
      waste: [
        { name: 'Lab Waste', icon: <FlaskConical className="w-5 h-5 text-gray-500" /> },
        { name: 'Solvent Waste', icon: <Droplets className="w-5 h-5 text-blue-600" /> },
      ],
    },
    resourceExtraction: {
      hotspot: 'red',
      commodities: [
        { name: 'Fossil Fuels', icon: <Droplets className="w-5 h-5 text-gray-700" />, description: 'Oil, gas, coal extraction' },
        { name: 'Biomass', icon: <TreePine className="w-5 h-5 text-green-700" />, description: 'Plants, wood, linked to deforestation' },
      ],
      waste: [{ name: 'Extraction Waste', icon: <Trash2 className="w-5 h-5 text-red-600" /> }],
    },
    commodityTrading: {
      hotspot: 'yellow', // Less direct impact, more about scale
      commodities: [],
      waste: [
        { name: 'Storage Energy Use', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
        { name: 'Transport Emissions (Aggregation)', icon: <Truck className="w-5 h-5 text-gray-600" /> },
      ],
    },
    specializedProcessing: {
      hotspot: 'orange',
      commodities: [
        { name: 'Petrochemicals', icon: <Droplets className="w-5 h-5 text-gray-700" />, description: 'Intermediates, derivatives' },
        { name: 'Palm Oil Derivatives', icon: <TreePine className="w-5 h-5 text-green-700" />, description: 'Excipient precursors' },
      ],
      waste: [
        { name: 'Chemical Byproducts', icon: <Flame className="w-5 h-5 text-red-600" /> },
        { name: 'Wastewater', icon: <Droplets className="w-5 h-5 text-blue-600" /> },
      ],
    },
    apiExcipientMfg: {
      hotspot: 'orange',
      commodities: [
        { name: 'Petrochemicals', icon: <Droplets className="w-5 h-5 text-gray-700" />, description: 'APIs, excipients' },
      ],
      waste: [
        { name: 'Hazardous Chemicals', icon: <Flame className="w-5 h-5 text-red-600" /> },
        { name: 'Wastewater', icon: <Droplets className="w-5 h-5 text-blue-600" /> },
        // START Sterilization & Cleaning Impacts
        { name: 'Energy for Sterilization', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
        { name: 'Cleaning Agent Waste', icon: <FlaskConical className="w-5 h-5 text-gray-500" /> },
        // END Sterilization & Cleaning Impacts
      ],
    },
    drugProductMfg: {
      hotspot: 'orange',
      commodities: [],
      waste: [
        { name: 'Packaging Waste', icon: <Recycle className="w-5 h-5 text-green-600" /> },
        { name: 'Formulation Waste', icon: <FlaskConical className="w-5 h-5 text-gray-500" /> },
        // START Sterilization & Cleaning Impacts
        { name: 'Energy for Sterilization', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
        { name: 'Cleaning Agent Waste', icon: <FlaskConical className="w-5 h-5 text-gray-500" /> },
        { name: 'Single-use Sterile Packaging', icon: <Package className="w-5 h-5 text-gray-500" /> },
        // END Sterilization & Cleaning Impacts
      ],
    },
    distribution: {
      hotspot: 'yellow',
      commodities: [],
      waste: [
        { name: 'Transportation Emissions', icon: <Truck className="w-5 h-5 text-gray-600" /> },
        { name: 'Cold Chain Energy Use', icon: <Zap className="w-5 h-5 text-yellow-500" /> },
        { name: 'Packaging Waste (Logistics)', icon: <Package className="w-5 h-5 text-gray-500" /> }, // Clarified name
        // START Sterilization & Cleaning Impacts
        { name: 'Single-use Applicator Waste', icon: <Syringe className="w-5 h-5 text-red-500" /> },
        // END Sterilization & Cleaning Impacts
      ],
    },
    endoflife: {
      hotspot: 'red',
      commodities: [],
      waste: [
        { name: 'Expired/Unused Meds', icon: <Pill className="w-5 h-5 text-purple-600" /> },
        { name: 'Plastic Packaging', icon: <Recycle className="w-5 h-5 text-green-600" /> },
        // START Sterilization & Cleaning Impacts
        { name: 'Single-use Applicator Waste', icon: <Syringe className="w-5 h-5 text-red-500" /> },
        { name: 'Sterile Packaging Waste', icon: <Package className="w-5 h-5 text-gray-500" /> },
        // END Sterilization & Cleaning Impacts
      ],
    },
  };

  // Data for structure layer (updated for new stages)
  const structureData = {
    rd: {
      gaps: [{ name: 'Early-Stage Material Trace', icon: <Cloud className="w-5 h-5 text-blue-500" /> }],
      corporate: [{ name: 'CRO/CDMO Partnerships', icon: <GitFork className="w-5 h-5 text-purple-600" /> }],
    },
    resourceExtraction: {
      gaps: [{ name: 'Land Use Traceability', icon: <Cloud className="w-5 h-5 text-blue-500" /> }],
      corporate: [],
    },
    commodityTrading: {
      gaps: [{ name: 'Origin Obscurity', icon: <Cloud className="w-5 h-5 text-blue-500" /> }],
      corporate: [{ name: 'Trading Houses', icon: <Building2 className="w-5 h-5 text-gray-600" /> }],
    },
    specializedProcessing: {
      gaps: [{ name: 'Derivative Feedstock Trace', icon: <Cloud className="w-5 h-5 text-blue-500" /> }],
      corporate: [{ name: 'Subsidiaries/Affiliates', icon: <Building2 className="w-5 h-5 text-gray-600" /> }],
    },
    apiExcipientMfg: {
      gaps: [],
      corporate: [{ name: 'CDMO Partnerships', icon: <GitFork className="w-5 h-5 text-purple-600" /> }],
    },
    drugProductMfg: {
      gaps: [],
      corporate: [{ name: 'Partnerships/JVs', icon: <Briefcase className="w-5 h-5 text-indigo-600" /> }],
    },
    distribution: {
      gaps: [{ name: 'Cold Chain Traceability', icon: <AlertTriangle className="w-5 h-5 text-red-500" /> }],
      corporate: [{ name: 'Acquisitions', icon: <Briefcase className="w-5 h-5 text-indigo-600" /> }],
    },
    endoflife: {
      gaps: [{ name: 'Post-Consumer Disposal Data', icon: <Cloud className="w-5 h-5 text-blue-500" /> }],
      corporate: [],
    },
  };

  // Data for regulatory/digital layer (updated for new stages)
  const regulatoryDigitalData = {
    rd: {
      regulatory: [{ name: 'cGMP/FDA', icon: <Scale className="w-5 h-5 text-blue-500" /> }],
      digital: [{ name: 'AI/ML for R&D', icon: <Brain className="w-5 h-5 text-teal-500" /> }],
    },
    resourceExtraction: {
      regulatory: [{ name: 'Local Environmental Regs', icon: <Shield className="w-5 h-5 text-green-500" /> }],
      digital: [{ name: 'Satellite Monitoring', icon: <Globe className="w-5 h-5 text-blue-500" /> }],
    },
    commodityTrading: {
      regulatory: [{ name: 'Trade Regulations', icon: <Scale className="w-5 h-5 text-blue-500" /> }],
      digital: [{ name: 'Market Analytics', icon: <Brain className="w-5 h-5 text-teal-500" /> }],
    },
    specializedProcessing: {
      regulatory: [{ name: 'REACH/Chemical Safety', icon: <Shield className="w-5 h-5 text-green-500" /> }],
      digital: [{ name: 'Process Automation', icon: <Wifi className="w-5 h-5 text-orange-500" /> }],
    },
    apiExcipientMfg: {
      regulatory: [{ name: 'cGMP/ISO', icon: <Scale className="w-5 h-5 text-blue-500" /> }],
      digital: [{ name: 'IoT/Automation', icon: <Wifi className="w-5 h-5 text-orange-500" /> }],
    },
    drugProductMfg: {
      regulatory: [{ name: 'cGMP/FDA/EMA', icon: <Scale className="w-5 h-5 text-blue-500" /> }],
      digital: [{ name: 'Digital Twin', icon: <Brain className="w-5 h-5 text-teal-500" /> }],
    },
    distribution: {
      regulatory: [{ name: 'DSCSA', icon: <Shield className="w-5 h-5 text-green-500" /> }],
      digital: [{ name: 'Real-time Tracking', icon: <Globe className="w-5 h-5 text-blue-500" /> }],
    },
    endoflife: {
      regulatory: [{ name: 'RCRA', icon: <Trash2 className="w-5 h-5 text-red-500" /> }],
      digital: [{ name: 'Waste Analytics', icon: <Zap className="w-5 h-5 text-yellow-500" /> }],
    },
  };

  // Data for commingling layer (updated for new stages, especially commodityTrading)
  const comminglingData = {
    resourceExtraction: {
      prevalence: 'low',
      details: [],
    },
    commodityTrading: {
      prevalence: 'high',
      details: [
        { icon: <Globe2 className="w-20 h-20 text-blue-600" />, text: 'Commodity Exchanges: Raw materials (crude palm oil, bulk chemicals, ...) are traded on global markets, losing specific origin identity.' },
        { icon: <Blend className="w-20 h-20 text-gray-700" />, text: 'Bulk Aggregation: Materials from numerous small producers are combined into large shipments by traders.' },
        { icon: <XCircle className="w-20 h-20 text-red-500" />, text: 'Loss of Traceability: Once commingled, tracing back to specific extraction sites (a particular farm or forest area) becomes extremely difficult.' },
      ],
    },
    specializedProcessing: {
      prevalence: 'medium',
      details: [
        { icon: <Blend className="w-20 h-20 text-gray-700" />, text: 'Derivative Blending: Processed derivatives (e.g., specific fatty acids) from various sources are often blended to meet industrial specifications.' },
        { icon: <Link className="w-20 h-20 text-green-600" />, text: 'Complex Supply Chains: Multiple intermediate suppliers contribute to the final derivative, making end-to-end mapping challenging.' },
      ],
    },
    apiExcipientMfg: {
      prevalence: 'medium',
      details: [
        { icon: <Blend className="w-12 h-12 text-gray-700" />, text: 'Excipient Blends: Many excipients are blends of components from multiple suppliers.' },
        { icon: <Link className="w-12 h-12 text-green-600" />, text: 'API Precursor Sourcing: Precursor chemicals for API synthesis often come from commingled sources.' },
      ],
    },
    drugProductMfg: {
      prevalence: 'low',
      details: [
        { icon: <Truck className="w-20 h-20 text-gray-700" />, text: 'Finished Product Assembly: Different ingredients are combined, but their commingling happened at earlier stages. Focus here is on product integrity.' },
      ],
    },
    distribution: {
      prevalence: 'low',
      details: [
        { icon: <Truck className="w-20 h-20 text-gray-700" />, text: 'Finished Product Consolidation: Different drugs from various manufacturers might be consolidated, but raw material origins are not mixed further.' },
      ],
    },
    endoflife: {
      prevalence: 'none',
      details: [],
    },
  };

  // Data for circularity layer (updated for new stages)
  const circularityData = {
    specializedProcessing: {
      flows: [
        { icon: <RefreshCcw className="w-12 h-12 text-green-600" />, text: 'Byproduct Valorization: Chemical byproducts are processed and used as raw materials for other chemical industries.' },
      ],
    },
    apiExcipientMfg: {
      flows: [
        { icon: <RefreshCcw className="w-12 h-12 text-green-600" />, text: 'Solvent Recovery & Reuse: Spent solvents are purified and reintroduced into manufacturing processes.' },
        { icon: <RefreshCcw className="w-9 h-9 text-green-600" />, text: 'Catalyst Regeneration: Catalysts used in synthesis are regenerated and reused.' },
      ],
    },
    drugProductMfg: {
      flows: [
        { icon: <RefreshCcw className="w-20 h-20 text-green-600" />, text: 'Internal Packaging Recycling: Manufacturing waste packaging (plastic scrap, single-use applicator, ...) is recycled for non-pharma uses or external reprocessing.' },
      ],
    },
    endoflife: {
      flows: [
        { icon: <RefreshCcw className="w-12 h-12 text-green-600" />, text: 'Packaging Material Recycling: Recycled plastics and paper from packaging are sent back to material suppliers.' },
        { icon: <RefreshCcw className="w-12 h-12 text-green-600" />, text: 'Reprocessing of Medical Plastics: Certain medical device plastics are collected and reprocessed for new material feedstocks.' },
      ],
    },
  };

  // New data for specific company flow
  const companyFlowData = {
    resourceExtraction: {
      companies: ['Eagle High Plantations Tbk Pt'],
      flow: 'Oil Palm Cultivation -> Crude Palm Oil (CPO)',
      description: 'Eagle High Plantations, an Indonesian palm oil company, cultivates oil palm and produces Crude Palm Oil (CPO).'
    },
    commodityTrading: {
      companies: ['Commodity Traders'],
      flow: 'CPO from various sources -> Aggregated CPO/PKO',
      description: 'CPO from various plantations (including potentially Eagle High) is traded and aggregated on global commodity markets by traders.'
    },
    specializedProcessing: {
      companies: ['Sinar Mas Agro Resources and Technology (SMART)', 'BASF (Oleochemicals)', 'Croda International Plc'],
      flow: 'Aggregated CPO/PKO -> Refined Palm Oil Products -> Oleochemicals -> Pharmaceutical-grade Excipients',
      description: 'SMART refines CPO into palm oil products and oleochemicals. BASF and Croda then source these oleochemicals, further processing them into pharmaceutical-grade excipients (e.g., fatty acids, glycerides, surfactants).'
    },
    apiExcipientMfg: {
      companies: ['BASF (Excipients)', 'Croda International Plc'],
      flow: 'Pharmaceutical-grade Excipients -> Specialized Excipients/APIs',
      description: 'BASF and Croda specialize in producing high-purity pharmaceutical excipients from these derivatives, which are then ready for drug formulation.'
    },
    drugProductMfg: {
      companies: ['Pfizer'],
      flow: 'Specialized Excipients/APIs + Other Ingredients -> Finished Pharmaceutical Product',
      description: 'Pfizer procures these specialized excipients (and APIs) from suppliers like BASF and Croda, combining them with other ingredients to formulate their final pharmaceutical products.'
    }
  };

  // Helper to get hotspot color class
  const getHotspotColorClass = (hotspot) => {
    switch (hotspot) {
      case 'red': return 'bg-red-100 border-red-400';
      case 'orange': return 'bg-orange-100 border-orange-400';
      case 'yellow': return 'bg-yellow-100 border-yellow-400';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  // Helper to get commingling prevalence class
  const getComminglingClass = (prevalence) => {
    switch (prevalence) {
      case 'high': return 'bg-blue-50 border-blue-400 border-dashed';
      case 'medium': return 'bg-blue-100 border-blue-300 border-dashed';
      case 'low': return 'bg-blue-200 border-blue-200 border-dashed';
      default: return '';
    }
  };

  // Helper to get company flow highlight class
  const getCompanyFlowHighlightClass = (stageId) => {
    const relevantStages = ['resourceExtraction', 'commodityTrading', 'specializedProcessing', 'apiExcipientMfg', 'drugProductMfg'];
    return showCompanyFlow && relevantStages.includes(stageId) ? 'border-green-600 ring-2 ring-green-300' : '';
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-inter text-gray-800">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
          Pharmaceutical Manufacturing Supply Chain
        </h1>
        <p className="text-center text-gray-700 text-lg mb-8">
          Mapping the tiers of the pharma supply chain, from R&D to end-of-life, and uncovering gaps and risk exposures.
        </p>

        {/* Layer Toggles */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 p-4 bg-gray-50 rounded-lg shadow-inner">
          <button
            onClick={() => setShowEnvironmentalLayer(!showEnvironmentalLayer)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showEnvironmentalLayer ? 'bg-green-600 text-white shadow-md' : 'bg-green-200 text-green-800 hover:bg-green-300'
            }`}
          >
            <Leaf className="w-5 h-5 mr-2" /> Environmental Exposure
          </button>
          <button
            onClick={() => setShowStructureLayer(!showStructureLayer)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showStructureLayer ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
            }`}
          >
            <Layers className="w-5 h-5 mr-2" /> Supply Chain Structure
          </button>
          <button
            onClick={() => setShowRegulatoryDigitalLayer(!showRegulatoryDigitalLayer)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showRegulatoryDigitalLayer ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
            }`}
          >
            <Workflow className="w-5 h-5 mr-2" /> Regulatory & Digital Enablers
          </button>
          <button
            onClick={() => setShowComminglingLayer(!showComminglingLayer)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showComminglingLayer ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'
            }`}
          >
            <Blend className="w-5 h-5 mr-2" /> Commingling & Markets
          </button>
          <button
            onClick={() => setShowCircularityLayer(!showCircularityLayer)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showCircularityLayer ? 'bg-teal-600 text-white shadow-md' : 'bg-teal-200 text-teal-800 hover:bg-teal-300'
            }`}
          >
            <RefreshCcw className="w-5 h-5 mr-2" /> Circularity & Waste-to-Resource
          </button>
          <button
            onClick={() => setShowCompanyFlow(!showCompanyFlow)}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              showCompanyFlow ? 'bg-orange-600 text-white shadow-md' : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
            }`}
          >
            <ArrowRightCircle className="w-5 h-5 mr-2" /> Specific Company Flow
          </button>
        </div>

        {/* Visualization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`relative flex flex-col items-center p-4 rounded-xl border-2 shadow-md transition-all duration-300
                ${showEnvironmentalLayer ? getHotspotColorClass(environmentalData[stage.id]?.hotspot) : 'bg-gray-100 border-gray-300'}
                ${showComminglingLayer ? getComminglingClass(comminglingData[stage.id]?.prevalence) : ''}
                ${getCompanyFlowHighlightClass(stage.id)}
              `}
            >
              {/* Stage Header */}
              <div className="flex flex-col items-center mb-3 text-center min-h-[100px] justify-start">
                {stage.icon}
                <h3 className="mt-2 text-lg font-semibold text-blue-900 leading-tight">
                  {stage.name}
                </h3>
              </div>

              {/* Key Actors */}
              <div className="text-sm text-gray-800 w-full p-3">
                <p className="font-bold mb-1">Key Actors:</p>
                <ul className="list-disc list-inside text-left pl-4 min-h-[70px]">
                  {stage.actors.map((actor, idx) => (
                    <li key={idx}>{actor}</li>
                  ))}
                </ul>
              </div>

              {/* Container for all conditional detail layers to ensure consistent vertical starting point */}
              <div className="w-full">
                {/* Specific Company Flow Details */}
                {showCompanyFlow && companyFlowData[stage.id] && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-orange-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-orange-700">Specific Company Flow:</p>
                    <p className="text-gray-800 font-medium mb-1">Companies: {companyFlowData[stage.id].companies.join(', ')}</p>
                    <p className="text-gray-800 mb-1">Flow: {companyFlowData[stage.id].flow}</p>
                    <p className="text-gray-700">{companyFlowData[stage.id].description}</p>
                  </div>
                )}

                {/* Environmental Layer Details */}
                {showEnvironmentalLayer && environmentalData[stage.id] && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-green-700">Environmental Insights:</p>
                    {environmentalData[stage.id].commodities && environmentalData[stage.id].commodities.length > 0 && (
                      <div className="mb-2">
                        <p className="font-medium text-gray-700">Commingled Commodities:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {environmentalData[stage.id].commodities.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}: {item.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {environmentalData[stage.id].waste && environmentalData[stage.id].waste.length > 0 && (
                      <div>
                        <p className="font-medium text-gray-700">Waste Streams:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {environmentalData[stage.id].waste.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Structure Layer Details */}
                {showStructureLayer && structureData[stage.id] && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-purple-700">Structural Insights:</p>
                    {structureData[stage.id].gaps && structureData[stage.id].gaps.length > 0 && (
                      <div className="mb-2">
                        <p className="font-medium text-gray-700">Knowledge Gaps:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {structureData[stage.id].gaps.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {structureData[stage.id].corporate && structureData[stage.id].corporate.length > 0 && (
                      <div>
                        <p className="font-medium text-gray-700">Corporate Structuring:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {structureData[stage.id].corporate.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Regulatory & Digital Layer Details */}
                {showRegulatoryDigitalLayer && regulatoryDigitalData[stage.id] && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-blue-700">Regulatory & Digital Enablers:</p>
                    {regulatoryDigitalData[stage.id].regulatory && regulatoryDigitalData[stage.id].regulatory.length > 0 && (
                      <div className="mb-2">
                        <p className="font-medium text-gray-700">Regulations:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {regulatoryDigitalData[stage.id].regulatory.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {regulatoryDigitalData[stage.id].digital && regulatoryDigitalData[stage.id].digital.length > 0 && (
                      <div>
                        <p className="font-medium text-gray-700">Digital Technologies:</p>
                        <ul className="list-disc list-inside text-left pl-4">
                          {regulatoryDigitalData[stage.id].digital.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              {item.icon} <span className="ml-1">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Commingling Layer Details */}
                {showComminglingLayer && comminglingData[stage.id] && comminglingData[stage.id].details.length > 0 && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-indigo-700">Commingling & Markets:</p>
                    <ul className="list-disc list-inside text-left pl-4">
                      {comminglingData[stage.id].details.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          {item.icon} <span className="ml-1">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Circularity Layer Details */}
                {showCircularityLayer && circularityData[stage.id] && circularityData[stage.id].flows.length > 0 && (
                  <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200 w-full text-sm">
                    <p className="font-semibold mb-2 text-teal-700">Circularity & Waste-to-Resource:</p>
                    <ul className="list-disc list-inside text-left pl-4">
                      {circularityData[stage.id].flows.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          {item.icon} <span className="ml-1">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div> {/* End of conditional detail layers container */}

              {/* Arrow to next stage (visual only, not functional flow) */}
              {index < stages.length - 1 && (
                <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 hidden md:block">
                  <svg className="w-12 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Legend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
            <div>
              <p className="font-medium mb-2 text-green-700">Environmental Hotspots:</p>
              <div className="flex items-center mb-1">
                <span className="w-4 h-4 rounded-full bg-red-100 border border-red-400 mr-2"></span> High Impact
              </div>
              <div className="flex items-center mb-1">
                <span className="w-4 h-4 rounded-full bg-orange-100 border border-orange-400 mr-2"></span> Moderate-High Impact
              </div>
              <div className="flex items-center mb-1">
                <span className="w-4 h-4 rounded-full bg-yellow-100 border border-yellow-400 mr-2"></span> Moderate Impact
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Commingled Commodities:</p>
              <div className="flex items-center mb-1">
                <Droplets className="w-5 h-5 text-gray-700 mr-2" /> Petrochemicals
              </div>
              <div className="flex items-center mb-1">
                <TreePine className="w-5 h-5 text-green-700 mr-2" /> Palm Oil
              </div>
              <div className="flex items-center mb-1">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" /> Deforestation Links
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Waste Streams:</p>
              <div className="flex items-center mb-1">
                <Flame className="w-5 h-5 text-red-600 mr-2" /> Hazardous Chemicals
              </div>
              <div className="flex items-center mb-1">
                <Pill className="w-5 h-5 text-purple-600 mr-2" /> Expired/Unused Meds
              </div>
              <div className="flex items-center mb-1">
                <Recycle className="w-5 h-5 text-green-600 mr-2" /> Plastic Packaging
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Knowledge Gaps:</p>
              <div className="flex items-center mb-1">
                <Cloud className="w-5 h-5 text-blue-500 mr-2" /> Limited Visibility
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Corporate Structuring:</p>
              <div className="flex items-center mb-1">
                <Building2 className="w-5 h-5 text-gray-600 mr-2" /> Subsidiaries/Affiliates
              </div>
              <div className="flex items-center mb-1">
                <GitFork className="w-5 h-5 text-purple-600 mr-2" /> CDMO Partnerships
              </div>
              <div className="flex items-center mb-1">
                <Briefcase className="w-5 h-5 text-indigo-600 mr-2" /> Acquisitions
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Regulatory & Digital:</p>
              <div className="flex items-center mb-1">
                <Scale className="w-5 h-5 text-blue-500 mr-2" /> Regulatory Compliance
              </div>
              <div className="flex items-center mb-1">
                <Brain className="w-5 h-5 text-teal-500 mr-2" /> AI/ML
              </div>
              <div className="flex items-center mb-1">
                <Lock className="w-5 h-5 text-gray-700 mr-2" /> Blockchain
              </div>
              <div className="flex items-center mb-1">
                <Wifi className="w-5 h-5 text-orange-500 mr-2" /> IoT
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Commingling & Markets:</p>
              <div className="flex items-center mb-1">
                <Globe2 className="w-5 h-5 text-blue-600 mr-2" /> Commodity Exchange
              </div>
              <div className="flex items-center mb-1">
                <Blend className="w-5 h-5 text-gray-700 mr-2" /> Blending/Mixing
              </div>
              <div className="flex items-center mb-1">
                <XCircle className="w-5 h-5 text-red-500 mr-2" /> Loss of Traceability
              </div>
              <div className="flex items-center mb-1">
                <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-400 border-dashed mr-2"></span> High Commingling
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Circularity & Waste-to-Resource:</p>
              <div className="flex items-center mb-1">
                <RefreshCcw className="w-5 h-5 text-green-600 mr-2" /> Circular Flow / Reprocessing
              </div>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-700">Specific Company Flow:</p>
              <div className="flex items-center mb-1">
                <ArrowRightCircle className="w-5 h-5 text-orange-600 mr-2" /> Highlighted Flow Path
              </div>
              <div className="flex items-center mb-1">
                <span className="w-4 h-4 rounded-full bg-gray-100 border-2 border-green-600 ring-2 ring-green-300 mr-2"></span> Stages in Highlighted Flow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

