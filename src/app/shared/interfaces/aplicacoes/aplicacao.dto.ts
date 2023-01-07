
export interface AplicacaoDto {
    title: string;
    description: string;
    function: string;
    system_type: string;
    cover: string;
    images: string[];
    techs: [
        {
            name: string;
            color: string;
        }
    ]
}