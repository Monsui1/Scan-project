import axios from "axios";
import { HISTOGRAMS, OBJECTSEARCH, DOCUMENTS } from "./API.jsx";

async function makeRequest(url, data) {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

async function Histograms(searchParameters) {
    const data = {
        issueDateInterval: {
            startDate: searchParameters.startDate,
            endDate: searchParameters.endDate
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: searchParameters.inn,
                        maxFullness: true,
                        inBusinessNews: null
                    }
                ],
                onlyMainRole: searchParameters.mainRole,
                tonality: searchParameters.tonality,
                onlyWithRiskFactors: searchParameters.riskFactors,
                riskFactors: { and: [], or: [], not: [] },
                themes: { and: [], or: [], not: [] }
            },
            themesFilter: { and: [], or: [], not: [] }
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: []
        },
        attributeFilters: {
            excludeTechNews: searchParameters.technicalNews,
            excludeAnnouncements: searchParameters.announcements,
            excludeDigests: searchParameters.newsDigests
        },
        similarMode: "duplicates",
        limit: searchParameters.documentCount,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"]
    };

    return await makeRequest(HISTOGRAMS, data);
}

async function Objectsearch(searchParameters) {
    const data = {
        issueDateInterval: {
            startDate: searchParameters.startDate,
            endDate: searchParameters.endDate
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: searchParameters.inn,
                        maxFullness: true,
                        inBusinessNews: null
                    }
                ],
                onlyMainRole: searchParameters.mainRole,
                tonality: searchParameters.tonality,
                onlyWithRiskFactors: searchParameters.riskFactors,
                riskFactors: { and: [], or: [], not: [] },
                themes: { and: [], or: [], not: [] }
            },
            themesFilter: { and: [], or: [], not: [] }
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: []
        },
        attributeFilters: {
            excludeTechNews: searchParameters.technicalNews,
            excludeAnnouncements: searchParameters.announcements,
            excludeDigests: searchParameters.newsDigests
        },
        similarMode: "duplicates",
        limit: searchParameters.documentCount,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"]
    };

    return await makeRequest(OBJECTSEARCH, data);
}

async function Documents(arrForRequest) {
    const data = { ids: arrForRequest };

    return await makeRequest(DOCUMENTS, data);
}

export { Histograms, Objectsearch, Documents };
