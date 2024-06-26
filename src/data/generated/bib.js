﻿const generatedBibEntries = {
    "Hittawe2022": {
        "abstract": " Prediction of Surface Sea Temperature (SST) is of great importance in seasonal forecasts in the region and beyond, mainly due to its significant role in global atmospheric circulation. On the other hand, SST predicting from given multivariate sequences using historical ocean variables is vital to investigate how SST physical phenomena generated. This paper seeks to significantly improve the prediction of Surface Sea Temperature (SST) by combining two machine learning methodologies: short-term memory networks (LSTM) added to Gaussian Process Regression (GPR). We developed a data-driven approach based on deep learning and GPR modeling to improve the prediction of SST levels in the red sea based on meteorological variables, including the hourly wind speed (WS), air temperature at 2m (T2), and relative humidity (RH) variables. The coupled GPR-LSTM model may potentially carry both flexibility and feature extraction capacity, which could describe temporal dependencies in SST time-series and improve the prediction accuracy of SST. It is necessary to indicate that these types of hybrid-based approach architectures have not used before in SST time-series prediction, so it is a new approach to deal with these types of problems. The results demonstrate a significant improvement when this hybrid model is compared to LSTM and the most frequently used ensemble learning models.",
        "author": "M. M. Hittawe and S. Langodan and O. Beya and I. Hoteit and O. Knio",
        "doi": "10.1109/INDIN51773.2022.9976090",
        "journal": "2022 IEEE 20th International Conference on Industrial Informatics (INDIN)",
        "title": "Efficient SST prediction in the Red Sea using hybrid deep learning-based approach",
        "type": "article",
        "url": "https://ieeexplore.ieee.org/document/9976090",
        "year": "2022"
    },
    "Kurihara2021": {
        "abstract": " This paper describes a quasi-physical method (the Q-method) for determining the sea surface temperatures (SSTs). The Q-method is a coefficient-based technique developed for processing the multiband infrared (IR) data of the geostationary Himawari-8 satellite. We applied the Q-method to the split-window data from the Second-generation Global Imager (SGLI) onboard the Global Change Observation Mission-Climate (GCOM-C) satellite. A comparison of the determined SGLI SSTs and buoy data shows a bias with a robust standard deviation of \u22120.097 K and 0.28 K in the daytime and \u22120.18 K and 0.28 K at night, respectively. Meanwhile, high biases of nearly \u22120.5 K were calculated for SSTs at and around 305 K. A residuals analysis suggests that the high negative bias is caused by insufficient information on the atmospheric correction brought by split-window data. This paper discusses the physical and mathematical background of the Q-method and compares it with another coefficient-based physical scheme.",
        "author": "Yukio Kurihara and Hiroshi Murakami and Kazunori Ogata and Misako Kachi",
        "doi": "10.1016/j.rse.2021.112347",
        "journal": "Remote Sensing of Environment",
        "title": "A quasi-physical sea surface temperature method for the split-window data from the Second-generation Global Imager (SGLI) onboard the Global Change Observation Mission-Climate (GCOM-C) satellite",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0034425721000651?via%3Dihub",
        "year": "2021"
    },
    "Li2021": {
        "abstract": " It is important to consider where, when, and how the evolution of sea surface temperature anomalies (SSTA) plays significant roles in regional or global climate changes. In the comparison of where and when, there is a great challenge in clearly describing how SSTA evolves in space and time. In light of the evolution from generation, through development, and to the dissipation of SSTA, this paper proposes a novel approach to identifying an evolution of SSTA in space and time from a time-series of a raster dataset. This method, called PoAIES, includes three key steps. Firstly, a cluster-based method is enhanced to explore spatiotemporal clusters of SSTA, and each cluster of SSTA at a time snapshot is taken as a snapshot object of SSTA. Secondly, the spatiotemporal topologies of snapshot objects of SSTA at successive time snapshots are used to link snapshot objects of SSTA into an evolution object of SSTA, which is called a process object. Here, a linking threshold is automatically determined according to the overlapped areas of the snapshot objects, and only those snapshot objects that meet the specified linking threshold are linked together into a process object. Thirdly, we use a graph-based model to represent a process object of SSTA. A node represents a snapshot object of SSTA, and an edge represents an evolution between two snapshot objects. Using a number of child nodes from an edge\u2019s parent node and a number of parent nodes from the edge\u2019s child node, a type of edge (an evolution relationship) is identified, which shows its development, splitting, merging, or splitting/merging. Finally, an experiment on a simulated dataset is used to demonstrate the effectiveness and the advantages of PoAIES, and a real dataset of satellite-SSTA is used to verify the rationality of PoAIES with the help of ENSO\u2019s relevant knowledge, which may provide new references for global change research.",
        "author": "Lianwei Li and Yangfeng Xu and Cunjin Xue and Yuxuan Fu and Yuanyu Zhang",
        "doi": "10.3390/ijgi10080500",
        "journal": "ISPRS International Journal of Geo-Information",
        "number": "8",
        "pages": "500",
        "title": "A Process-Oriented Approach to Identify Evolutions of Sea Surface Temperature Anomalies with a Time-Series of a Raster Dataset",
        "type": "article",
        "url": "https://www.mdpi.com/2220-9964/10/8/500",
        "volume": "10",
        "year": "2021"
    },
    "Miao2023": {
        "abstract": " Sea surface temperature anomalies (SSTAs) and sea surface height anomalies (SSHAs) are indispensable parts of scientific research, such as mesoscale eddy, current, ocean-atmosphere interaction and so on. Nowadays, extended-range predictions of ocean dynamics, especially in SSTA and SSHA, can provide daily prediction services in the range of 30 days, which bridges the gap between synoptic-scale weather forecasts and monthly average scale climate predictions. However, the forecast efficiency of extended range remains problematic. With the development of ocean reanalysis and satellite remote sensing products, large amounts datasets provide an unprecedented opportunity to use big data for the extended range prediction of ocean dynamics. In this study, a hybrid model, combing convolutional neural network (CNN) model with transfer learning (TL), was established to predict SSTA and SSHA at monthly scales, which makes full use of these data resources that arise from delayed gridding reanalysis products and real-time satellite remote sensing observations. The proposed model, where both ocean and atmosphere reanalysis datasets serve as the pretraining dataset and the satellite remote sensing observations are employed for fine-tuning based on the transfer learning (TL) method, can effectively capture the evolving spatial characteristics of SSTAs and SSHAs with low prediction errors over the 30 days range. When the forecast lead time is 30 days, the root means square errors for the SSTAs and SSHAs model results are 0.32\u00b0C and 0.027 m in the South China Sea, respectively, indicating that this model has not only satisfactory prediction performance but also offers great potential for practical operational applications in improving the skill of extended-range predictions.",
        "author": "Yonglan Miao and Xuefeng Zhang and Yunbo Li and Lianxin Zhang and Dianjun Zhang",
        "doi": "10.3389/fmars.2022.1073377",
        "journal": "Frontiers in Marine Science",
        "title": "Monthly extended ocean predictions based on a convolutional neural network via the transfer learning method",
        "type": "article",
        "url": "https://www.frontiersin.org/articles/10.3389/fmars.2022.1073377/full",
        "year": "2023"
    },
    "Ning2023": {
        "abstract": " Sea surface temperature (SST) forecasts help with managing the marine ecosystem and the aquaculture impacted by anthropogenic climate change. Numerical dynamical models are resource intensive for SST forecasts; machine learning (ML) models could reduce high computational requirements and have been in the focus of the research community recently. ML models normally require a large amount of data for training. Environmental data are collected on regularly-spaced grids, so early work mainly used grid-based deep learning (DL) for prediction. However, both grid data and the corresponding DL approaches have inherent problems. As geometric DL has emerged, graphs as a more generalized data structure and graph neural networks (GNNs) have been introduced to the spatiotemporal domains. In this work, we preliminarily explored graph re-sampling and GNNs for global SST forecasts, and GNNs show better one month ahead SST prediction than the persistence model in most oceans in terms of root mean square errors.",
        "author": "Ding Ning and Varvara Vetrova and Karin R. Bryan",
        "doi": "10.48550/arXiv.2305.09468",
        "journal": "Workshop on Tackling Climate Change with Machine Learning, ICLR 2023",
        "title": "GRAPH-BASED DEEP LEARNING FOR SEA SURFACE TEMPERATURE FORECASTS",
        "type": "article",
        "url": "https://arxiv.org/abs/2305.09468",
        "year": "2023"
    },
    "Penland1995": {
        "abstract": " It is argued from SST observations for the period 1950 to 90 that the tropical Indo-Pacific ocean-atmosphere system may be described as a stable linear dynamical system driven by spatially coherent Gaussian white noise. Evidence is presented that the predictable component of SST anomaly growth is associated with the constructive interference of several damped normal modes after an optimal initial structure is set up by the white noise forcing. In particular, El Ni\u00f1o\u2013Southern Oscillation (ENSO) growth is associated with an interplay of at least three damped normal modes, with periods longer than two years and decay times of 4 to 8 months, rather than the manifestation of a single unstable mode whose growth is arrested by nonlinearities. Interestingly, the relevant modes are not the three least damped modes of the system. Rather, mode selection, and the establishment of the optimal initial structure from which growth occurs, are controlled by the stochastic forcing. Experiments conducted with an empirical stochastic-dynamical model show that stochastic forcing not only adds energy to the system, but also plays a role in setting up the optimal structure. It is shown that growth from modal interference can occur for as long as 18 months, which within the confines of this model defines a predictability limit for growth events. Growth associated with the stochastic forcing is also possible, but is unpredictable. The timescale on which the predictable and unpredictable components of SST growth become comparable to each other gives a more conservative predictability limit of 15 months.The above scenario is based on empirical evidence obtained from SST anomalies alone. From the results of several tests based on statistical properties of linear and nonlinear dynamical systems, one may conclude that much of the ENSO cycle in nature is dominated by stable, forced dynamics.",
        "author": "C\u00e9cile Penland and Prashant D. Sardeshmukh",
        "doi": "10.1175/1520-0442(1995)008<1999:TOGOTS>2.0.CO;2",
        "journal": "Journal of Climate",
        "number": "8",
        "pages": "1999-2024",
        "title": "The Optimal Growth of Tropical Sea Surface Temperature Anomalies",
        "type": "article",
        "url": "https://journals.ametsoc.org/view/journals/clim/8/8/1520-0442_1995_008_1999_togots_2_0_co_2.xml",
        "volume": "8",
        "year": "1995"
    },
    "Rice2020": {
        "abstract": " Accurately predicting sea-surface temperature weeks to months into the future is an important step toward long term weather forecasting. Standard atmosphere-ocean coupled numerical models provide accurate sea- surface forecasts on the scale of a few days to a few weeks, but many important weather systems require greater foresight. In this paper we propose machine-learning approaches sea-surface temperature forecasting that are accurate on the scale of dozens of weeks. Our approach is based in Koopman operator theory, a useful tool for dynamical systems modelling. With this approach, we predict sea surface temperature in the Gulf of Mexico up to 180 days into the future based on a present image of thermal conditions and three years of historical training data. We evaluate the combination of a basic Koopman method with a convolutional autoencoder, and a newly proposed \u201cconsistent Koopman\u201d method, in various permutations. We show that the Koopman approach consistently outperforms baselines, and we discuss the utility of our additional assumptions and methods in this sea-surface temperature domain.",
        "author": "Julian Rice and Wenwei Xu and Andrew August",
        "doi": "10.48550/arXiv.2010.00399",
        "journal": "arXiv",
        "title": "Analyzing Koopman approaches to physics-informed machine learning for long-term sea-surface temperature forecasting",
        "type": "article",
        "url": "https://arxiv.org/abs/2010.00399",
        "year": "2020"
    },
    "Sarkar2020": {
        "abstract": " Sea surface temperature (SST) prediction has widespread applications in the field of marine ecology, fisheries, sports and climate change studies. At present, the real-time SST forecasts are made by numerical models which are categorically based on physics-based assumptions subjected to boundary and initial conditions. They are more suited to a large spatial region than in a specific location. In this study, location-specific SST forecasts were made by combining deep learning neural networks with numerical estimators at five different locations around India for three different time horizons (daily, weekly and monthly). Firstly, forecasts were made with traditional neural networks (NNs) and then through deep learning networks. The NNs significantly improved on the results achieved by numerical forecasts which were further enhanced by the deep learning long short-term memory (LSTM) neural network over all timescales and at all the selected sites. The model was performed successfully in terms of various statistical parameters with correlation values nearing 1.0 while minimizing the errors. Additionally, a comparative study with a linear system, the autoregressive integrated moving average with exogenous input was made. The predictive skills of deep learning LSTMs are found to be more attractive than the other existing techniques (linear or other NNs) due to their ability of learning long time dependencies and extracting features from a sample space.",
        "author": "Partha Pratim Sarkar and Prashanth Janardhan and Parthajit Roy",
        "doi": "10.1007/s42452-020-03239-3",
        "journal": "SN Applied Sciences",
        "title": "Prediction of sea surface temperatures using deep learning neural networks",
        "type": "article",
        "url": "https://link.springer.com/article/10.1007/s42452-020-03239-3",
        "year": "2020"
    },
    "Taylor2022": {
        "abstract": " Sea surface temperature (SST) variability plays a key role in the global weather and climate system, with phenomena such as El Ni\u00f1o-Southern Oscillation (ENSO) regarded as a major source of interannual climate variability at the global scale. The ability to make long-range forecasts of SST variations and extreme marine heatwave events have potentially significant economic and societal benefits, especially in a warming climate. We have developed a deep learning time series prediction model (Unet-LSTM), based on more than 70 years (1950\u20132021) of ECMWF ERA5 monthly mean SST and 2-m air temperature data, to predict global 2-dimensional SSTs up to a 24-month lead. Model prediction skills are high in the equatorial and subtropical Pacific. We have assessed the ability of the model to predict SST anomalies in the Ni\u00f1o3.4 region, an ENSO index in the equatorial Pacific, and the Blob marine heatwave events in the northeast Pacific in detail. An assessment of the predictions of the 2019\u20132020 El Ni\u00f1o and the 2016\u20132017 and 2017\u20132018 La Ni\u00f1a show that the model has skill up to 18 months in advance. The prediction of the 2015\u20132016 extreme El Ni\u00f1o is less satisfactory, which suggests that subsurface ocean information may be crucial for the evolution of this event. Note that the model makes predictions of the 2-d monthly SST field and Nino 3.4 is just one region embedded in the global field. The model also shows long lead prediction skills for the northeast Pacific marine heatwave, the Blob. However, the prediction of the marine heatwaves in the southeast Indian Ocean, the Ningaloo Ni\u00f1o, shows a short lead prediction. These results indicate the significant potential of data-driven methods to yield long-range predictions of SST anomalies.",
        "author": "John Taylor and Ming Feng",
        "doi": "10.3389/fclim.2022.932932",
        "journal": "Frontiers in Climate",
        "title": "A deep learning model for forecasting global monthly mean sea surface temperature anomalies",
        "type": "article",
        "url": "https://www.frontiersin.org/articles/10.3389/fclim.2022.932932/full",
        "year": "2022"
    },
    "Woo2018": {
        "abstract": " Koreas first geostationary satellite, the \u201cCommunication, Ocean, and Meteorological Satellite\u201d (COMS), has been operating since 2010. The Meteorological Imager (MI), an sensor on-board the COMS, has observed sea-surface radiances for the estimation of sea surface temperature (SST) in the western Pacific Ocean and eastern Indian Ocean. To derive the SST coefficients of COMS, quality-controlled surface drifting buoy data were collected for the period of April 2011 to March 2015. A collocation procedure between COMS/MI data and the surface drifter data produced a matchup database for 4 years from 2011 to 2015. The coefficients for the COMS/MI SST were derived by applying appropriate algorithms, i.e., the Multi-channel SST (MCSST) and Non-linear SST (NLSST) algorithms, for daytime and nighttime data using a regression method. Validation results suggest the possibility of the continuous use of the coefficients as representative SST coefficients of COMS. The estimated SSTs near the edge of a full disk with high satellite zenith angles over 60\u00b0 revealed relatively large errors compared to drifter temperatures. Most of NLSST formulations exhibited overestimation of SSTs at low SSTs (<10 \u00b0C). This study suggests an approach by which SST can be measured accurately in order to contribute to tracking climate change.",
        "author": "Hye-Jin Woo and Kyung-Ae Park and Xiaofeng Li and Eun-Young Lee",
        "doi": "10.3390/rs10121916",
        "journal": "Remote Sensing",
        "number": "12",
        "pages": "1916",
        "title": "Sea Surface Temperature Retrieval from the First Korean Geostationary Satellite COMS Data: Validation and Error Assessment",
        "type": "article",
        "url": "https://www.mdpi.com/2072-4292/10/12/1916",
        "volume": "10",
        "year": "2018"
    }
};