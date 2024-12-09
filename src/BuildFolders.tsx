import * as React from "react";
import {
  FunctionComponent,
  useState, useEffect
} from "react";
import * as SDK from "azure-devops-extension-sdk";
import { getClient } from "azure-devops-extension-api";
import { BuildRestClient } from "azure-devops-extension-api/Build";
import { CommonServiceIds, IProjectPageService } from "azure-devops-extension-api/Common";
import { Button } from "azure-devops-ui/Button";

export const App: FunctionComponent = () => {
    const [builds, setBuilds] = useState([]);

    useEffect(() => {
        SDK.init();
        listBuilds();
    }, []);

    const listBuilds = async () => {
        try {
            await SDK.ready();
            const projectService = await SDK.getService<IProjectPageService>(CommonServiceIds.ProjectPageService);
            const project = await projectService.getProject();

            if (!project) {
                console.error("Nenhum projeto encontrado no contexto.");
                return;
            }

            const buildClient = getClient(BuildRestClient);
            const buildDefinitions = await buildClient.getDefinitions(project.id);
            const paths = buildDefinitions.map(d => d.path);

            setBuilds(buildDefinitions);
        } catch (error) {
            console.error("Erro ao listar as builds:", error);
        }
    };

    return (
        <div className="flex-column">
            <h1 className="bolt-title">Builds do Projeto</h1>
            <Button primary={true} text="Recarregar Builds" onClick={listBuilds} />
            <div className="bolt-table">
                {builds.map(build => (
                    <div key={build.id} className="bolt-table-row">
                        Build: {build.name}
                    </div>
                ))}
            </div>
            <div style={{ backgroundColor: "#e0e0e0", padding: "10px" }}>
                Painel Direito
            </div>
        </div>
    );
};